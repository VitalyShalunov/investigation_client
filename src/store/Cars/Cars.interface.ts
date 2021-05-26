export interface ICar {
    id: number,
    model: string,
    manufacturer: string
}

export type CarGetPayload = ICar;

export type CarPostPayload = Omit<CarGetPayload, "id">;

export type CarPutPayload = CarGetPayload;