import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {TypeService} from "@/services/TypeService";
import {IType} from "@/models/IType";
import {IOption} from "@/models/IOption";
import {BrandService} from "@/services/BrandService";
import {IBrand} from "@/models/IBrand";


export const useBrandsForSelect = () => {
    return useQuery('admin categories type brand', () => BrandService.getAll(), {
        select: ({data}) => data.map(
            (brand: IBrand): IOption => ({
                label: brand.name,
                value: brand.id
            })),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке брендов');
        }
    });
}