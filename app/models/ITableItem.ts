export interface ITableCell {
    type: string,
    value: string
}

export interface ITableItem {
    id: number
    editUrl: string
    items: ITableCell[]
}