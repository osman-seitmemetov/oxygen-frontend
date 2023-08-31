import {IOption} from "@/models/IOption";


export const sortOptions: IOption[] = [
    {
        value: "increase",
        label: "По увеличению цены"
    },
    {
        value: "decrease",
        label: "По уменьшению цены"
    },
    {
        value: "alphabet",
        label: "от А до Я"
    },
    {
        value: "alphabetReverse",
        label: "от Я до А"
    },
    {
        value: "new",
        label: "Новинки"
    },
    {
        value: "popular",
        label: "Популярное"
    }
]