import {FC} from "react";
import Input from "@/components/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import InputGroup from "@/components/UI/InputGroup/InputGroup";
import Checkbox from "@/components/Checkbox/Checkbox";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import Form from "@/components/Form/Form";
import FormLink from "@/components/Form/FormLink/FormLink";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import FormSeparator from "@/components/Form/FormSeparator/FormSeparator";
import Auth from "@/components/Auth/Auth";
import {PASSWORD_RECOVERY_ROUTE, REGISTRATION_ROUTE} from "@/lib/consts";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";
import {useAuth} from "@/hooks/useAuth";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";


const Login: FC = () => {
    useAuthRedirect();
    const router = useRouter();
    const {user} = useAuth();
    if (user) router.push('/profile').then();

    interface ILoginFields {
        email: string,
        password: string,
        rememberMe: string
    }

    const {
        register, handleSubmit, formState: {errors, isSubmitting}, reset, control
    } = useForm<ILoginFields>({
        mode: "onChange"
    });

    const {login} = useActions();

    const onSubmit: SubmitHandler<ILoginFields> = ({password, email}) => {
        login({email, password});
        reset();
    }

    return (
        <Auth title="Вход">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup title="Email" autoMargin>
                    <Input
                        {...register('email', {
                            required: "Это поле обязательно",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите валидный email'
                            }
                        })}
                        placeholder="Введите ваш email"
                        type="email"
                        inputMode="email"
                        error={errors.email}
                    />
                </InputGroup>

                <InputGroup title="Пароль" autoMargin>
                    <Input
                        {...register('password', {
                            required: "Это поле обязательно",
                        })}
                        placeholder="Введите пароль"
                        error={errors.password}
                        type="password"
                    />
                </InputGroup>

                <FormAdditional>
                    <Controller
                        control={control}
                        name="rememberMe"
                        rules={{}}
                        render={({field}) =>
                            <Checkbox
                                isSmall
                                {...field}
                            >
                                Запомнить меня
                            </Checkbox>
                        }
                    />
                    <FormLink link={PASSWORD_RECOVERY_ROUTE}>Забыли пароль?</FormLink>
                </FormAdditional>

                <PrimaryButton
                    disabled={isSubmitting}
                    type="submit"
                >
                    Войти
                </PrimaryButton>
                <FormSeparator/>
                <SecondaryButton link={REGISTRATION_ROUTE}>Зарегистрироваться</SecondaryButton>
            </Form>
        </Auth>
    );
}

// const mapStateToProps = (state: RootState) => ({
//     isAuth: state.authReducer.isAuth
// })

// export default connect(mapStateToProps, {login})(Login);
export default Login;