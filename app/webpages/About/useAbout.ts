import {useQuery} from "react-query";
import {AboutService} from "@/services/AboutService";

export const useAbout = () => {
    const queryData = useQuery('get about', () => AboutService.get(), {
        onError: (error: any) => {
            alert(error.message);
        },
    });

    return {...queryData}
}