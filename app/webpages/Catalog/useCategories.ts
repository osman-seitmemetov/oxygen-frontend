import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useMutation, useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";

export const useCategories = () => {
    const queryData = useQuery('all categories', () => CategoryService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
        },
    });

    return useMemo(() => queryData, [queryData]);
}