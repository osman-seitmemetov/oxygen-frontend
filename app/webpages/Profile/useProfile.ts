import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {UserService} from "@/services/UserService";
import {convertPostgresDateWithoutTime} from "@/lib/date/convertPostgresDateWithoutTime";
import {genderTypes} from "@/models/IUser";
import {convertInputDateToPostgresDate} from "@/lib/date/convertInputDateToPostgresDate";
import {useCallback, useMemo} from "react";
import {IProfileFields} from "@/types/types";


export const useProfile = (setValue: UseFormSetValue<IProfileFields>, profileId: string) => {
    const queryData = useQuery('profile', () => UserService.getById(String(profileId)), {
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
            toastError(error, 'Ошибка получения профиля');
        },
    })

    const {mutateAsync} = useMutation(
        'update profile',
        (data: {
            phone: string,
            birthday: string,
            lastname: string,
            firstname: string,
            gender: genderTypes,
            email: string
        }) => UserService.editProfile(data),
        {
            onError(error) {
                toastError(error, 'Ошибка при обновлении профиля');
            },
            onSuccess({data}) {
                toastr.success('Обновление профиля', 'Профиль успешно обновлен');
            },
        }
    )

    const onSubmit: SubmitHandler<IProfileFields> = useCallback(async (data) => {
        const birthday = convertInputDateToPostgresDate(data.birthday) || "";
        await mutateAsync({...data, birthday});
    }, [mutateAsync])

    return useMemo(() => ({onSubmit, ...queryData}), [onSubmit, queryData]);
}