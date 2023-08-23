import {IFilterGroup} from "@/models/IFilterGroup";
import {IFilterOption} from "@/models/IFilterOption";

export interface IProductInfoValue {
    filterGroup: IFilterGroup,
    filterOptions: IFilterOption[]
}