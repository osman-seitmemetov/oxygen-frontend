import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import {IBrandFields} from "@/components/forms/AdminBrandForm/useAdminBrandForm";
import {useTypesForSelect} from "@/hooks/useTypesForSelect";
import {stripHtml} from "string-strip-html";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminBrandFormProps {
    onSubmit: SubmitHandler<IBrandFields>,
    disabled: boolean,
}

const AdminBrandForm: FC<AdminBrandFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IBrandFields>();

    const {isLoading: isTypesLoading, data: types} = useTypesForSelect();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Название" autoMargin>
                <Input
                    {...register('name', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите название"
                    error={errors.name}
                />
            </InputGroup>

            <InputGroup title="Описание" autoMargin>
                <Controller
                    control={control}
                    name="description"
                    rules={{
                        validate: {
                            required: (v) => (v && stripHtml(v).result.length > 0) || 'Это поле обязательно'
                        }
                    }}
                    render={({field: {value, onChange}, fieldState: {error}}) =>
                        <DynamicTextEditor
                            onChange={onChange}
                            value={value}
                            error={error}
                            placeholder="Описание товара"
                        />
                    }
                />
            </InputGroup>

            <FieldsSection>
                <InputGroup title="Изображение">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="logo"
                        rules={{
                            required: "Это поле обязательное"
                        }}
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <ImageUploader
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Лого"
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Типы">
                    <Controller
                        control={control}
                        name="typeIds"
                        rules={{
                            required: "Это поле обязательное"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Типы"
                                options={types || []}
                                isLoading={isTypesLoading}
                                isMulti
                                isSearchable
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            <ButtonGreen disabled={disabled}>Сохранить</ButtonGreen>
        </Form>
    );
};

export default AdminBrandForm;