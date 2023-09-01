import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Form from "@/components/Form/Form";
import style from "@/webpages/Profile/Profile.module.scss";
import {IFilterOptionFields} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";
import dynamic from "next/dynamic";
import {useFilterGroupsForSelect} from "@/hooks/useFilterGroupsForSelect";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminFilterGroupFormProps {
    onSubmit: SubmitHandler<IFilterOptionFields>,
    disabled: boolean
}

const AdminFilterOptionForm: FC<AdminFilterGroupFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IFilterOptionFields>();

    const filterGroups = useFilterGroupsForSelect();

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

            <InputGroup className={style.profile__input} title="Группа фильтров">
                <Controller
                    control={control}
                    name="filterGroupId"
                    rules={{
                        required: "Это поле обязательно"
                    }}
                    render={({field, fieldState: {error}}) =>
                        <DynamicSelect
                            error={error}
                            field={field}
                            placeholder="Выберите группу фильтров"
                            isSearchable={false}
                            options={filterGroups.data || []}
                        />
                    }
                />
            </InputGroup>

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminFilterOptionForm;