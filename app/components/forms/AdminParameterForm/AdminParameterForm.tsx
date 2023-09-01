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

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminParameterFormProps {
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

const AdminParameterForm: FC<AdminParameterFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control, watch
    } = useFormContext<IParameterFields>();

    const colorValuesFieldArray = useFieldArray({
        control, name: 'colorValues',
    });

    const textValuesFieldArray = useFieldArray({
        control, name: 'textValues',
    });

    const numberValuesFieldArray = useFieldArray({
        control, name: 'numberValues',
    });

    const type = watch("type");
    const format = watch("format");

    useEffect(() => {
        if(format === "INPUT") {
            colorValuesFieldArray.remove();
            numberValuesFieldArray.remove();
            textValuesFieldArray.remove();
        }

        if (type !== "COLOR") {
            colorValuesFieldArray.remove();
            //@ts-ignore
            colorValuesFieldArray.append({});
        }

        if (type !== "NUMBER") {
            numberValuesFieldArray.remove();
            //@ts-ignore
            numberValuesFieldArray.append({});
        }

        if (type !== "TEXT") {
            textValuesFieldArray.remove();
            //@ts-ignore
            textValuesFieldArray.append({});
        }
    }, [format, textValuesFieldArray.remove, numberValuesFieldArray.remove, colorValuesFieldArray.remove, type])

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
                <InputGroup title="Тип">
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
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Формат">
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
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            {
                ((format === "CHECKBOX" || format === "RADIO") && type !== "BOOLEAN") && <FieldsSection title="Значение">
                    {
                        type === "COLOR" ? colorValuesFieldArray.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => colorValuesFieldArray.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`colorValues.${index}.title` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите название цвета"
                                        error={errors.colorValues?.[index]?.title}
                                    />

                                    <Input
                                        {...register(`colorValues.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите HEX-код"
                                        error={errors.colorValues?.[index]?.value}
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "TEXT" ? textValuesFieldArray.fields.map(({id}, index) => {
                            return (
                                <PropertyInputGroup
                                    removeHandler={() => textValuesFieldArray.remove(index)}
                                    key={id}
                                >
                                    <Input
                                        {...register(`textValues.${index}.value` as const, {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите текст"
                                        error={errors.textValues?.[index]?.value}
                                    />
                                </PropertyInputGroup>
                            )
                        }) : type === "NUMBER" ? numberValuesFieldArray.fields.map(({id}, index) => {
                                return (
                                    <PropertyInputGroup
                                        removeHandler={() => numberValuesFieldArray.remove(index)}
                                        key={id}
                                    >
                                        <Input
                                            {...register(`numberValues.${index}.value` as const, {
                                                required: "Это поле обязательно"
                                            })}
                                            placeholder="Введите число"
                                            error={errors.numberValues?.[index]?.value}
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
                    ? type === "COLOR"
                        ? <SecondaryButton
                            type="button"
                            // @ts-ignore
                            onClick={() => colorValuesFieldArray.append({})}
                            style={{
                                maxWidth: 400,
                                marginBottom: 20
                            }}
                        >
                            Добавить значение характеристики
                        </SecondaryButton>
                        : type === "TEXT"
                            ? <SecondaryButton
                                type="button"
                                // @ts-ignore
                                onClick={() => textValuesFieldArray.append({})}
                                style={{
                                    maxWidth: 250,
                                    marginBottom: 20
                                }}
                            >
                                Добавить значение характеристики
                            </SecondaryButton>

                            : type === "NUMBER"
                                ? <SecondaryButton
                                    type="button"
                                    // @ts-ignore
                                    onClick={() => numberValuesFieldArray.append({})}
                                    style={{
                                        maxWidth: 250,
                                        marginBottom: 20
                                    }}
                                >
                                    Добавить значение характеристики
                                </SecondaryButton>
                                : <></>
                    : <></>
            }

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    )
        ;
};

export default AdminParameterForm;