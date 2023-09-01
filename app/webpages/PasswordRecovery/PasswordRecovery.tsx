import {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import {inputModes} from "@/UI/InputGroup/Input/InputEnums";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {buttonTypes} from "@/UI/buttons/PrimaryButton/ButtonGreenEnums";
import Checkbox from "@/components/Checkbox/Checkbox";
import Form from "@/components/Form/Form";
import Title from "@/components/Title/Title";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import FormLabel from "@/components/Form/FormLabel/FormLabel";
import Auth from "@/components/Auth/Auth";
import {PASSWORD_RECOVERY2_ROUTE} from "@/lib/consts";

const PasswordRecovery: FC = () => {
    return (
        <Auth title="Восстановление пароля">
            <Form action={PASSWORD_RECOVERY2_ROUTE}>
                <InputGroup title="По номеру телефона">
                    <Input placeholder="Введите ваш номер телефона" type="tel" inputMode={inputModes.tel} />
                </InputGroup>

                <FormAdditional>
                    <Checkbox isSmall>Восстановить пароль с помощью эл. почты</Checkbox>
                </FormAdditional>

                <PrimaryButton type={buttonTypes.submit}>Войти</PrimaryButton>
                <FormLabel>Мы отправим вам SMS с кодом подтверждения</FormLabel>
            </Form>
        </Auth>
    );
}

export default PasswordRecovery;