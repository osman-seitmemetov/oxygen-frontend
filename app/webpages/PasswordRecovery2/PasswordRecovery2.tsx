import {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import {inputModes} from "@/UI/InputGroup/Input/InputEnums";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {buttonTypes} from "@/UI/buttons/PrimaryButton/ButtonGreenEnums";
import Auth from "@/components/components/Auth/Auth";
import Form from "@/components/components/Form/Form";
import {PROFILE_ROUTE} from "@/lib/consts";

const PasswordRecovery2: FC = () => {
    return (
        <Auth title="Восстановление пароля">
            <Form action={PROFILE_ROUTE} className="login__form">
                <InputGroup title="Введите код из SMS">
                    <Input placeholder="Введите код" type="text" inputMode={inputModes.numeric} />
                </InputGroup>

                <InputGroup title="Новый пароль">
                    <Input placeholder="Введите новый пароль" type="password" inputMode={inputModes.text} />
                </InputGroup>

                <InputGroup title="Повторите новый пароль">
                    <Input placeholder="Повторите новый пароль" type="password" inputMode={inputModes.text} />
                </InputGroup>

                <PrimaryButton type={buttonTypes.submit}>Войти</PrimaryButton>
            </Form>
        </Auth>
    );
}

export default PasswordRecovery2;