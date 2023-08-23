import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {useSubcategorySecondsForSelect} from "@/hooks/useSubcategorySecondsForSelect";
import {IPromocodeFields} from "@/components/forms/AdminPromocodeForm/useAdminPromocodeForm";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminProductFormProps {
    onSubmit: SubmitHandler<IPromocodeFields>,
    disabled: boolean,
}

const AdminPromocodeForm: FC<AdminProductFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IPromocodeFields>();

    const {data: categories, isLoading: isCategoriesLoading} = useSubcategorySecondsForSelect();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Название" autoMargin>
                <Input
                    {...register('title', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите заголовок"
                    error={errors.title}
                />
            </InputGroup>

            <FieldsSection>
                <InputGroup title="Код">
                    <Input
                        {...register('value', {
                            required: "Это поле обязательно"
                        })}
                        placeholder="Введите код"
                        error={errors.value}
                    />
                </InputGroup>

                <InputGroup title="Категории">
                    <Controller
                        control={control}
                        name="categoriesId"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Категория"
                                options={categories || []}
                                isLoading={isCategoriesLoading}
                                isMulti
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            <ButtonGreen disabled={disabled}>Сохранить</ButtonGreen>
        </Form>
    );
};

export default AdminPromocodeForm;