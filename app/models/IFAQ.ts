export interface IFAQItem {
    id: number,
    title: string,
    text: string
}

export interface IFAQ {
    title: string,
    items: IFAQItem[]
}