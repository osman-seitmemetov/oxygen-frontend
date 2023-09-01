import React, {FC} from 'react';
import {SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Form from "@/components/Form/Form";
import {IFilterGroupFields} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";


interface AdminFilterGroupFormProps {
    onSubmit: SubmitHandler<IFilterGroupFields>,
    disabled: boolean
}

const AdminFilterGroupForm: FC<AdminFilterGroupFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}
    } = useFormContext<IFilterGroupFields>();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Название" autoMargin>
                <Input
                    {...register('title', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите название"
                    error={errors.title}
                />
            </InputGroup>

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminFilterGroupForm;