import {useQuery} from "react-query";
import {useMemo} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {BannerService} from "@/services/BannerService";

export const useBanners = () => {
    const queryData = useQuery('banners', () => BannerService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении баннеров')
        },
    });

    return useMemo(() => ({
        ...queryData
    }), [queryData]);
}