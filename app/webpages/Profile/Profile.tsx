import React, {FC, useState} from "react";
import style from './Profile.module.scss';
import Input from "@/components/UI/InputGroup/Input/Input";
import InputGroup from "@/components/UI/InputGroup/InputGroup";
import Account from "@/components/Account/Account";
import {useAuth} from "@/hooks/useAuth";
import {Controller, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import InputTel from "@/UI/InputGroup/InputTel/InputTel";
import dynamic from "next/dynamic";
import {genders} from "@/lib/genders";
import {useProfile} from "@/webpages/Profile/useProfile";
import {IProfileFields} from "@/types/types";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const Profile: FC = () => {
    const {user} = useAuth();
    const profileId = String(user?.id);
    const [disabledInput, setDisabledInput] = useState(true);

    const unDisable = () => {
        setDisabledInput(false);
    }

    const disable = () => {
        setDisabledInput(true);
    }

    const {
        register, handleSubmit, formState: {errors}, control, setValue
    } = useForm<IProfileFields>({
        mode: "onChange"
    });

    const {onSubmit, isLoading} = useProfile(setValue, profileId);

    return (
        <Account isRenderDesktopTitle title="Мои данные">
            {
                isLoading
                    ? <div>loading...</div>
                    : <Form onSubmit={handleSubmit(onSubmit)} className={style.profile}>
                        <div className={style.profile__inputs}>
                            <InputGroup disabled={disabledInput} title="Фамилия">
                                <Input
                                    {...register('lastname', {
                                        required: "Это поле обязательно",
                                    })}
                                    placeholder="Введите фамилию"
                                    error={errors.lastname}
                                    disabled={disabledInput}
                                />
                            </InputGroup>

                            <InputGroup disabled={disabledInput} title="Имя">
                                <Input
                                    {...register('firstname', {
                                        required: "Это поле обязательно",
                                    })}
                                    placeholder="Введите фамилию"
                                    error={errors.firstname}
                                    disabled={disabledInput}
                                />
                            </InputGroup>

                            <InputGroup disabled={disabledInput} title="Дата рождения">
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

                            <InputGroup disabled={disabledInput} title="Мобильный телефон">
                                <Controller
                                    control={control}
                                    name="phone"
                                    rules={{
                                        required: "Это поле обязательно"
                                    }}
                                    render={({field, fieldState: {error}}) =>
                                        <InputTel
                                            mask="+7 (111) 111-11-11"
                                            placeholder="+7 (___) ___-__-__"
                                            error={error}
                                            disabled={disabledInput}
                                            {...field}
                                        />
                                    }
                                />
                            </InputGroup>

                            <InputGroup disabled={disabledInput} title="Email">
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

                            <InputGroup disabled={disabledInput} title="Пол">
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
                            ? <SecondaryButton
                                type="submit"
                                onClick={unDisable}
                                className={style.profile__btn}
                            >
                                Редактировать данные
                            </SecondaryButton>
                            : <SecondaryButton
                                type="button"
                                onClick={disable}
                                className={style.profile__btn}
                            >
                                Сохранить
                            </SecondaryButton>
                        }
                    </Form>
            }
        </Account>
    );
}

export default Profile;