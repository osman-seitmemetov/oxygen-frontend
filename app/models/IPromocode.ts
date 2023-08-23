export interface IPromocode {
    id: number,
    title: string,
    categoryId: number,
    value: string,
    categories: string[]
}

export interface IUserPromocode {
    id: number,
    userId: number,
    promocodeId: number,
    isUsed: boolean,
    promocode: IPromocode,
}