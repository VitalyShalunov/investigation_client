import Cookies from "universal-cookie";

const API_URL = 'https://localhost:8000';

class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.httpStatus = httpStatus;
    }
}

const getTokens = () => {

}
const handleResponse = async <T>(response: Response | Error): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        if ((response as Response).ok) {
            const endResult = response as Response;
            const contentType = endResult.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                endResult.json()
                    .then((resp) => { resolve((resp as T) || {} as T) })
                    .catch(() => console.log('error while json'));
            } else {
                resolve({} as T);
            }
        } else if ((response as Response).status) {
            const endResult = response as Response;
            reject(new HttpError(`Response: [${endResult.status}] ${endResult.statusText}`, endResult.status));
        } else {
            const errorResult = response as Error;
            reject(new HttpError(`Response: error ${errorResult.message}`, 0));
        }
    });
};

const getCookieBody = (requestInit?: RequestInit) => {
    const cookies = new Cookies();

    const access_token =cookies.get('access_token');
    // const {
    //     access,
    // } = cookies.get('access_token');


    const accessTokenHeader = new Headers({
        'Authorization': `Bearer ${access_token}`,
        'Access-Control-Request-Headers': 'Content-Type, authorization',
    })
    if (requestInit) {
        if (requestInit.headers) {
            (requestInit.headers as Headers).append('Authorization', `Bearer ${access_token}`);
        } else {
            requestInit.headers = accessTokenHeader;
        }
    } else {
        requestInit = {
            headers: accessTokenHeader
        };
    }
    return requestInit;
}
export const fetchFunctionApi = <T>(urlParams: string | URL, requestInit?: RequestInit): Promise<T> => {
    const url = urlParams instanceof URL ? urlParams.toString() : `${API_URL}${urlParams}`;
    // if (requestInit) {
    //     requestInit.credentials = 'include';
    // } else {
    //     requestInit = {
    //         credentials: 'include',
    //     }
    // }
    return new Promise<T>((resolve, reject) => {
        fetch(url, getCookieBody(requestInit))
            .then((users: Response) => {
                handleResponse<T>(users)
                    .then(resolve)
                    .catch(reject)
            })
            .catch((error: Error) => { handleResponse<HttpError>(error).catch(reject); });
    });
};

export const postFunctionApi = async <T>(urlParams: string, body: any): Promise<T> => {
    const res = await fetch(`${API_URL}${urlParams}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            ...getCookieBody().headers,
            'Content-Type': 'application/json',
        },
    });
    return handleResponse<T>(res);
};

export const putFunctionApi = async <T>(urlParams: string | URL, body: any): Promise<T> => {
    const res = await fetch(`${API_URL}${urlParams}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return handleResponse<T>(res);
};

export const deleteFunctionApi = async <T>(urlParams: string | URL): Promise<T> => {
    const res = await fetch(`${API_URL}${urlParams}`, {
        method: 'DELETE',
        headers: {
            ...getCookieBody().headers,
            // 'Access-Control-Allow-Methods': '*',
            // 'Access-Control-Allow-Origin': '*',
            // 'Authorization': '*',
            // 'Content-Type': 'text/html; charset=utf-8'
        },
    });
    return handleResponse<T>(res);
};
