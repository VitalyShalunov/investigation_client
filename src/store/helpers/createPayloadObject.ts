export const createPayloadObject = <T>(object: T): T => {
    const result: T = {} as T;
    for (const key in object) {
        if ({}.hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    }
    return result;
}
