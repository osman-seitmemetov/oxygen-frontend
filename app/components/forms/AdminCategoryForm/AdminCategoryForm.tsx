import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {stripHtml} from "string-strip-html";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {useFilterGroupsForSelect} from "@/hooks/useFilterGroupsForSelect";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import {IOption} from "@/models/IOption";
import {useCategoriesForSelect} from "@/hooks/useCategoriesForSelect";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const levels: IOption[] = [
    {
        label: "1",
        value: "1"
    },
    {
        label: "2",
        value: "2"
    },
    {
        label: "3",
        value: "3"
    },
]

interface AdminCategoryFormProps {
    onSubmit: SubmitHandler<ICategoryFields>,
    disabled: boolean,
}

const AdminCategoryForm: FC<AdminCategoryFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<ICategoryFields>();

    const {isLoading: isFilterGroupsLoading, data: FilterGroupsData} = useFilterGroupsForSelect();
    const filterGroups = FilterGroupsData;

    const {isLoading: isCategoriesLoading, data: categories} = useCategoriesForSelect({withoutThird: true});

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
                            placeholder="Описание категории"
                        />
                    }
                />
            </InputGroup>

            <FieldsSection>
                <InputGroup title="Изображение">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="img"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <ImageUploader
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Превью"
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Иконка" autoMargin>
                    <Input
                        {...register('icon', {
                            required: "Это поле обязательно"
                        })}
                        placeholder="Введите код иконки"
                        error={errors.name}
                    />
                </InputGroup>
            </FieldsSection>

            <FieldsSection>
                <InputGroup title="Родительская категория">
                    <Controller
                        control={control}
                        name="parentId"
                        rules={{}}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Родительская категория"
                                options={categories || []}
                                isLoading={isCategoriesLoading}
                                isSearchable
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Уровень вложенности">
                    <Controller
                        control={control}
                        name="lvl"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Уровень вложенности"
                                options={levels}
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            <InputGroup title="Фильтры">
                <Controller
                    control={control}
                    name="filterGroupIds"
                    rules={{
                        required: "Это поле обязательно"
                    }}
                    render={({field, fieldState: {error}}) =>
                        <DynamicSelect
                            error={error}
                            field={field}
                            placeholder="Фильтры"
                            options={filterGroups || []}
                            isLoading={isFilterGroupsLoading}
                            isMulti
                        />
                    }
                />
            </InputGroup>

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminCategoryForm;