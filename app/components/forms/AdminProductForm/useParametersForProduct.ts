import {useQuery} from "react-query";
import {useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ProductService} from "@/services/ProductService";

export const useParametersForProduct = () => {
    const [typeId, setTypeId] = useState(undefined);
    const debouncedTypeId = useDebounce(typeId, 500);

    const queryData = useQuery(['admin all product parameters', debouncedTypeId], () => ProductService.getAllParametersByTypeId(debouncedTypeId || ''), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении фильтров');
        },
        enabled: !!typeId,
    });

    return useMemo(() => ({
        ...queryData, setTypeId
    }), [queryData]);
}