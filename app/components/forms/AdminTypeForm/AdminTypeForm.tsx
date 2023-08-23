import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import {ITypeFields} from "@/components/forms/AdminTypeForm/useAdminTypeForm";
import {useParametersForSelect} from "@/hooks/useParametersForSelect";
import {useCategoriesForSelect} from "@/hooks/useCategoriesForSelect";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminTypeFormProps {
    onSubmit: SubmitHandler<ITypeFields>,
    disabled: boolean,
}

const AdminTypeForm: FC<AdminTypeFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<ITypeFields>();

    const {isLoading: isParametersLoading, data: parameters} = useParametersForSelect();
    const {isLoading: isCategoriesLoading, data: categories} = useCategoriesForSelect({withoutFirst: true, withoutSecond: true});

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

            <InputGroup title="Характеристики">
                <Controller
                    control={control}
                    name="parameterIds"
                    rules={{
                        required: "Это поле обязательное"
                    }}
                    render={({field, fieldState: {error}}) =>
                        <DynamicSelect
                            error={error}
                            field={field}
                            placeholder="Характеристики"
                            options={parameters || []}
                            isLoading={isParametersLoading}
                            isMulti
                            isSearchable
                        />
                    }
                />
            </InputGroup>

            <InputGroup title="Категория">
                <Controller
                    control={control}
                    name="categoryId"
                    rules={{
                        required: "Это поле обязательное"
                    }}
                    render={({field, fieldState: {error}}) =>
                        <DynamicSelect
                            error={error}
                            field={field}
                            placeholder="Категория"
                            options={categories || []}
                            isLoading={isCategoriesLoading}
                            isSearchable
                        />
                    }
                />
            </InputGroup>

            <ButtonGreen disabled={disabled}>Сохранить</ButtonGreen>
        </Form>
    );
};

export default AdminTypeForm;