import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {UserService} from "@/services/UserService";
import {convertPostgresDateWithoutTime} from "@/lib/date/convertPostgresDateWithoutTime";
import {genderTypes} from "@/models/IUser";
import {useCallback, useMemo} from "react";
import {convertInputDateToPostgresDate} from "@/lib/date/convertInputDateToPostgresDate";
import {IProfileFields} from "@/types/types";


export const useUserEdit = (setValue: UseFormSetValue<IProfileFields>) => {
    const {push, query} = useRouter();
    const userId = String(query.id);
    const queryData = useQuery('user', () => UserService.getById(String(userId)), {
        onSuccess({data}) {
            const birthday = convertPostgresDateWithoutTime(String(data.birthday)) || new Date();
            setValue('email', data.email);
            setValue('gender', data.gender);
            setValue('birthday', birthday);
            setValue('firstname', data.firstname);
            setValue('lastname', data.lastname);
            setValue('phone', data.phone);
        },
        onError(error) {
            toastError(error, 'Ошибка получения пользователя');
        },
    })

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation(
        'update user',
        (data: {
            phone: string,
            birthday: string,
            lastname: string,
            firstname: string,
            gender: genderTypes,
            email: string
        }) => UserService.editUser(data, userId),
        {
            onError(error) {
                toastError(error, 'Ошибка при обновлении данных пользователя');
            },
            onSuccess() {
                toastr.success('Обновление данных пользователя', 'Пользователь успешно обновлен');
                push('/admin/users').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IProfileFields> = useCallback(async (data) => {
        // if(!(user?.phone === data.phone
        //     || user?.birthday === convertInputDateToPostgresDate(data.birthday)
        //     || user?.gender === data.gender
        //     || user?.email === data.email
        //     || user?.firstname === data.firstname
        //     || user?.lastname === data.lastname))
        const birthday = convertInputDateToPostgresDate(data.birthday) || "";
        await mutateAsync({...data, birthday});
    }, [mutateAsync])

    return useMemo(() => ({onSubmit, isUpdateLoading, ...queryData}), [onSubmit, isUpdateLoading, queryData]);
}