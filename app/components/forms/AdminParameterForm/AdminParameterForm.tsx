import React, {FC, useEffect} from 'react';
import {Controller, SubmitHandler, useFieldArray, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import {IParameterFields} from "@/components/forms/AdminParameterForm/useAdminParameterForm";
import {IOption} from "@/models/IOption";
import PropertyInputGroup from "@/UI/PropertyInputGroup/PropertyInputGroup";
import {IAdminForm} from "@/models/IAdminForm";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminParameterFormProps extends IAdminForm {
    onSubmit: SubmitHandler<IParameterFields>,
    disabled: boolean,
}

const types: IOption[] = [
    {
        label: "Цвет",
        value: "COLOR"
    },
    {
        label: "Текст",
        value: "TEXT"
    },
    {
        label: "Да/нет - переключатель",
        value: "BOOLEAN"
    },
    {
        label: "Число",
        value: "NUMBER"
    }
];

const formats: IOption[] = [
    {
        label: "Выбор нескольких значений из списка",
        value: "CHECKBOX"
    },
    {
        label: "Выбор одного значения из списка",
        value: "RADIO"
    },
    {
        label: "Поле ввода",
        value: "INPUT"
    }
];

const AdminParameterForm: FC<AdminParameterFormProps> = ({onSubmit, disabled, mode}) => {
    const {
        register, handleSubmit, formState: {errors}, control, watch
    } = useFormContext<IParameterFields>();

    const savedValues = useFieldArray({
        control, name: 'savedValues',
    });

    const values = useFieldArray({
        control, name: 'values',
    });

    const type = watch("type");
    const format = watch("format");

    useEffect(() => {
        if(mode === "CREATE") values.remove();
    }, [format, type])

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Название" autoMargin disabled={mode === "EDIT"}>
                <Input
                    {...register('title', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите заголовок"
                    error={errors.title}
                    disabled={mode === "EDIT"}
                />
            </InputGroup>

            <FieldsSection>
                <InputGroup title="Тип" disabled={mode === "EDIT"}>
                    <Controller
                        control={control}
                        name="type"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Категория"
                                options={types}
                                disabled={mode === "EDIT"}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Формат" disabled={mode === "EDIT"}>
                    <Controller
                        control={control}
                        name="format"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Категория"
                                options={formats}
                                disabled={mode === "EDIT"}
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            {
                ((format === "CHECKBOX" || format === "RADIO") && type !== "BOOLEAN") &&
                <FieldsSection title="Значение">
                    {/*Вынести в отдельный компонент*/}
                    {
                        type === "COLOR" ? savedValues.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => savedValues.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`savedValues.${index}.title` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите название цвета"
                                        error={errors.values?.[index]?.title}
                                        disabled
                                    />

                                    <Input
                                        {...register(`savedValues.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите HEX-код"
                                        error={errors.values?.[index]?.value}
                                        disabled
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "TEXT" ? savedValues.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => savedValues.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`savedValues.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите текст"
                                        error={errors.values?.[index]?.value}
                                        disabled
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "NUMBER" ? savedValues.fields.map(({id}, index) => {
                                return (
                                    <PropertyInputGroup
                                        removeHandler={() => savedValues.remove(index)}
                                        key={id}
                                    >
                                        <Input
                                            {...register(`savedValues.${index}.value` as const, {
                                                required: "Это поле обязательно"
                                            })}
                                            placeholder="Введите число"
                                            error={errors.values?.[index]?.value}
                                            disabled
                                        />
                                    </PropertyInputGroup>
                                )
                            })
                            : <></>
                    }
                    {
                        type === "COLOR" ? values.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => values.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`values.${index}.title` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите название цвета"
                                        error={errors.values?.[index]?.title}
                                    />

                                    <Input
                                        {...register(`values.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите HEX-код"
                                        error={errors.values?.[index]?.value}
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "TEXT" ? values.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => values.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`values.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите текст"
                                        error={errors.values?.[index]?.value}
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "NUMBER" ? values.fields.map(({id}, index) => {
                                return (
                                    <PropertyInputGroup
                                        removeHandler={() => values.remove(index)}
                                        key={id}
                                    >
                                        <Input
                                            {...register(`values.${index}.value` as const, {
                                                required: "Это поле обязательно"
                                            })}
                                            placeholder="Введите число"
                                            error={errors.values?.[index]?.value}
                                        />
                                    </PropertyInputGroup>
                                )
                            })
                            : <></>
                    }
                </FieldsSection>
            }

            {
                format === "CHECKBOX" || format === "RADIO"
                    ? <SecondaryButton
                        type="button"
                        // @ts-ignore
                        onClick={() => values.append({})}
                        style={{
                            maxWidth: 400,
                            marginBottom: 20
                        }}
                    >
                        Добавить значение характеристики
                    </SecondaryButton>
                    : <></>
            }

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    )
        ;
};

export default AdminParameterForm;