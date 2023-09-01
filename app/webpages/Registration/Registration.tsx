import React, {FC} from "react";
import Input from "@/components/UI/InputGroup/Input/Input";
import InputGroup from "@/components/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import Checkbox from "@/components/Checkbox/Checkbox";
import Form from "@/components/Form/Form";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import FormSeparator from "@/components/Form/FormSeparator/FormSeparator";
import FormLabel from "@/components/Form/FormLabel/FormLabel";
import Auth from "@/components/Auth/Auth";
import {LOGIN_ROUTE} from "@/lib/consts";
import InputDate from "@/components/UI/InputGroup/InputDate/InputDate";
import InputTel from "@/components/UI/InputGroup/InputTel/InputTel";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useActions} from "@/hooks/useActions";
import {genderTypes} from "@/models/IUser";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {genders} from "@/lib/genders";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const Registration: FC = () => {
    interface IRegistrationFields { // вынести в отдельный файл @/models/form.ts
        phone: string,
        birthday: Date,
        lastname: string,
        firstname: string,
        gender: genderTypes,
        email: string,
        password: string
        confirm: string
    }

    const {
        register, handleSubmit,
        formState: {errors},
        reset, resetField,
        control
    } = useForm<IRegistrationFields>({
        mode: "onChange"
    });

    const {registration} = useActions();

    const onSubmit: SubmitHandler<IRegistrationFields> = (
        {
            phone, birthday,
            lastname, firstname,
            gender, email, password
        }) => {
        registration({
            phone, birthday, lastname, firstname, gender, email, password
        });
        reset();
    }

    const router = useRouter();
    const {user} = useAuth();
    if (user) router.push('/profile');

    return (
        <Auth title="Регистрация" isScrollable>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup title="Номер телефона*" autoMargin>
                    <Controller
                        control={control}
                        defaultValue=""
                        name="phone"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <InputTel
                                mask="+7 (111) 111-11-11"
                                placeholder="+7 (___) ___-__-__"
                                error={errors.phone?.message}
                                {...field}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Дата рождения*" autoMargin>
                    <Controller
                        control={control}
                        name="birthday"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <InputDate
                                dateFormat="dd.MM.yyyy"
                                placeholder="дд.мм.гггг"
                                mask="11.11.1111"
                                selected={field.value}
                                onChange={(date: Date) => field.onChange(date)}
                                error={errors.birthday?.message}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Фамилия*" autoMargin>
                    <Input
                        {...register('lastname', {
                            required: "Это поле обязательно",
                        })}
                        placeholder="Введите фамилию"
                        error={errors.lastname}
                    />
                </InputGroup>

                <InputGroup title="Имя*" autoMargin>
                    <Input
                        {...register('lastname', {
                            required: "Это поле обязательно",
                        })}
                        placeholder="Введите ваше имя"
                        error={errors.firstname}
                    />
                </InputGroup>

                <InputGroup title="Пароль*" autoMargin>
                    <Input
                        {...register('lastname', {
                            required: "Это поле обязательно",
                        })}
                        placeholder="Введите пароль"
                        type="password"
                        error={errors.password}
                    />
                </InputGroup>

                <InputGroup title="Пол*" autoMargin>
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
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Email*" autoMargin>
                    <Input
                        {...register('lastname', {
                            required: "Это поле обязательное",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите валидный email'
                            }
                        })}
                        placeholder="Введите вашу почту"
                        type="email"
                        inputMode="email"
                        error={errors.email}
                    />
                </InputGroup>

                <FormAdditional>
                    <Controller
                        control={control}
                        defaultValue=''
                        name="confirm"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <Checkbox
                                isSmall
                                {...field}
                            >
                                Я подтверждаю, что ознакомлен и согласен с
                                условиями <span> публичной оферты</span> электронного
                                магазина Convex
                            </Checkbox>
                        }
                    />
                </FormAdditional>


                <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
                <FormLabel>Мы отправим вам SMS с кодом подтверждения</FormLabel>
                <FormSeparator/>
                <SecondaryButton link={LOGIN_ROUTE}>У меня уже есть аккаунт</SecondaryButton>
            </Form>
        </Auth>
    );
}

export default Registration;