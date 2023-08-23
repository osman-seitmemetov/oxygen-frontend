import {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useMutation} from "react-query";
import {CartService} from "@/services/CartService";
import {toastError} from "@/lib/api/withToastrErrorRedux";

export const useCounter = (value: number, id: number | string, min: number, max: number) => {
    const [count, setCount] = useState<string | number>(String(value));
    const debouncedCount = useDebounce(count, 500);

    const {mutateAsync: changeCountAsync} = useMutation('change count cart product',
        () => {
            return CartService.changeCount(Number(id), Number(debouncedCount));
        }, {
            onError: (error) => {
                toastError(error, 'Возникла ошибка при измении количества');
            }
        });

    useEffect(() => {
        if (debouncedCount !== "") changeCountAsync();
    }, [debouncedCount, changeCountAsync]);

    const onChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        if (
            /^[0-9]+$/.test(e.target.value)
            && Number(e.target.value) >= min
            && Number(e.target.value) <= max
        ) {
            setCount(e.target.value);
        }

        if (e.target.value === "") setCount("");
        console.log(min, "   ", max)

    }, [max, min])

    const onChangeMinus = useCallback(async () => {
        if (count && Number(count) > min) setCount(Number(count) - 1);
        if (count == "") setCount(1);
    }, [count, min])

    const onChangePlus = useCallback(async () => {
        if (count && Number(count) < max) setCount(Number(count) + 1);
        if (count == "") setCount(1);
    }, [count, max])

    return useMemo(() => ({
        onChangePlus, onChangeMinus, onChange, count
    }), [onChangePlus, onChangeMinus, onChange, count])
}