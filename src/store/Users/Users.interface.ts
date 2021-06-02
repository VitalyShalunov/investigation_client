import { CarGetPayload } from "../Cars";

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    dateOfBirthday: Date,
    cars: CarGetPayload[],
    login: string,
    password: string,
}
export type UserGetPayload = IUser;

export type UserPostPayload = Omit<UserGetPayload, "id">;

export type UserPutPayload = IUser;
