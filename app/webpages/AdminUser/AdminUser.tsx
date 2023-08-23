import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import style from "@/webpages/Profile/Profile.module.scss";
import InputGroup from "@/UI/InputGroup/InputGroup";
import {Controller, useForm} from "react-hook-form";
import Input from "@/UI/InputGroup/Input/Input";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import InputTel from "@/UI/InputGroup/InputTel/InputTel";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Form from "@/components/Form/Form";
import dynamic from "next/dynamic";
import {useUserEdit} from "@/webpages/AdminUser/useUserEdit";
import {genders} from "@/lib/genders";
import {IProfileFields} from "@/types/types";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const AdminUser: FC = () => {
    const [disabledInput, setDisabledInput] = useState(true);

    const unDisable = () => {
        setDisabledInput(false);
    }

    const disable = () => {
        setDisabledInput(true);
    }

    const {
        register, handleSubmit,
        formState: {errors, isSubmitSuccessful,},
        reset, resetField,
        control,
        setValue
    } = useForm<IProfileFields>({
        mode: "onChange"
    });

    const {data, isLoading, onSubmit} = useUserEdit(setValue);
    const user = data?.data;

    return (
        <>
            {
                user && <Admin title={` > Пользователи > ${isLoading ? "Имя" : user.firstname} ${isLoading ? "Фамилия" : user.lastname}`}>
                    {
                        isLoading
                            ? <div>loading...</div>
                            : <Form onSubmit={handleSubmit(onSubmit)} className={style.profile}>
                                <div className={style.profile__inputs}>
                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Фамилия">
                                        <Input
                                            {...register('lastname', {
                                                required: "Это поле обязательно",
                                            })}
                                            placeholder="Введите фамилию"
                                            error={errors.lastname}
                                            disabled={disabledInput}
                                        />
                                    </InputGroup>

                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Имя">
                                        <Input
                                            {...register('firstname', {
                                                required: "Это поле обязательно",
                                            })}
                                            placeholder="Введите фамилию"
                                            error={errors.firstname}
                                            disabled={disabledInput}
                                        />
                                    </InputGroup>

                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Дата рождения">
                                        <Controller
                                            control={control}
                                            name='birthday'
                                            rules={{
                                                required: "Это поле обязательно"
                                            }}
                                            render={({field}) => (
                                                <InputDate
                                                    dateFormat="dd.MM.yyyy"
                                                    placeholder="дд.мм.гггг"
                                                    mask="11.11.1111"
                                                    selected={field.value}
                                                    onChange={(date: Date) => field.onChange(date)}
                                                    error={errors.birthday}
                                                    disabled={disabledInput}
                                                />
                                            )}
                                        />
                                    </InputGroup>

                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Мобильный телефон">
                                        <Controller
                                            control={control}
                                            name="phone"
                                            rules={{
                                                required: "Это поле обязательно"
                                            }}
                                            render={({field, fieldState: {error}}) =>
                                                <InputTel
                                                    mask="+7 (111) 111-11-11"
                                                    placeholder="Введите номер"
                                                    error={error}
                                                    disabled={disabledInput}
                                                    {...field}
                                                />
                                            }
                                        />
                                    </InputGroup>

                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Email">
                                        <Input
                                            {...register('email', {
                                                required: "Это поле обязательно",
                                            })}
                                            placeholder="Введите фамилию"
                                            type="email"
                                            inputMode="email"
                                            error={errors.email}
                                            disabled={disabledInput}
                                        />
                                    </InputGroup>

                                    <InputGroup disabled={disabledInput} className={style.profile__input} title="Пол">
                                        <Controller
                                            control={control}
                                            name="gender"
                                            rules={{
                                                required: "Это поле обязательно"
                                            }}
                                            render={({field, fieldState: {error}}) =>
                                                <DynamicSelect
                                                    error={error}
                                                    field={field}
                                                    placeholder="Выберите пол"
                                                    isSearchable={false}
                                                    options={genders || []}
                                                    disabled={disabledInput}
                                                />
                                            }
                                        />
                                    </InputGroup>
                                </div>

                                {disabledInput
                                    ? <ButtonTransparent
                                        type="submit"
                                        onClick={unDisable}
                                        className={style.profile__btn}
                                    >
                                        Редактировать данные
                                    </ButtonTransparent>
                                    : <ButtonTransparent
                                        type="button"
                                        onClick={disable}
                                        className={style.profile__btn}
                                    >
                                        Сохранить
                                    </ButtonTransparent>
                                }
                            </Form>
                    }
                </Admin>
            }
        </>
    );
}

export default AdminUser;

