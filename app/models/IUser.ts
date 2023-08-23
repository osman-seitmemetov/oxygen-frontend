export enum genderTypes {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    isActivated: boolean,
    id: number,
    birthday: string,
    gender: genderTypes,
    phone: string,
    role?: string
}