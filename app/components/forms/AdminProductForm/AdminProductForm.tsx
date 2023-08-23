import React, {FC, useEffect} from 'react';
import {Controller, SubmitHandler, UseFieldArrayReturn, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {stripHtml} from "string-strip-html";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import Checkbox from "@/components/Checkbox/Checkbox";
import {IProductFields} from "@/components/forms/AdminProductForm/useAdminProductForm";
import {useParametersForProduct} from "@/components/forms/AdminProductForm/useParametersForProduct";
import {useCategoriesForSelect} from "@/hooks/useCategoriesForSelect";
import {useBrandsForSelect} from "@/hooks/useBrandsForSelect";
import {useTypesForSelect} from "@/hooks/useTypesForSelect";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminProductFormProps {
    onSubmit: SubmitHandler<IProductFields>,
    disabled: boolean,
    fieldArray: UseFieldArrayReturn<IProductFields, "info">,
    mode: "CREATE" | "EDIT"
}

const AdminProductForm: FC<AdminProductFormProps> = ({onSubmit, disabled, fieldArray, mode}) => {
    const {
        register, handleSubmit, formState: {errors}, control, watch, setValue
    } = useFormContext<IProductFields>();

    const {data: categories, isLoading: isCategoriesLoading} = useCategoriesForSelect({
        withoutFirst: true,
        withoutSecond: true
    });
    const {data: brands, isLoading: isBrandsLoading} = useBrandsForSelect();
    const {data: types, isLoading: isTypesLoading} = useTypesForSelect();

    const {setTypeId, data, isLoading: isParametersLoading} = useParametersForProduct();
    const parameters = data?.data;

    const isDiscount = watch("isDiscount");
    const typeId = watch("typeId");
    const categoryId = watch("categoryId");

    console.log(fieldArray.fields, "fields")

    useEffect(() => {
        if(mode === "CREATE") parameters?.forEach(param => fieldArray.append({
            parameterId: Number(param.id),
            checkbox: {
                colorValueIds: [],
                numberValueIds: [],
                textValueIds: []
            },
            radio: {
                // @ts-ignore
                colorValueId: null,
                // @ts-ignore
                numberValueId: null,
                // @ts-ignore
                textValueId: null
            },
            input: {
                // @ts-ignore
                colorValue: {},
                // @ts-ignore
                numberValue: {},
                // @ts-ignore
                textValue: {},
                // @ts-ignore
                booleanValue: {}
            },
        }))
    }, [data?.data]);

    useEffect(() => {
        if(mode === "CREATE") fieldArray.remove();
        setTypeId(String(typeId));
    }, [setTypeId, typeId]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Название" autoMargin>
                <Input
                    {...register('name', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите заголовок"
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

                <InputGroup title="Категория">
                    <Controller
                        control={control}
                        name="categoryId"
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
                                disabled={mode === "EDIT"}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Бренд">
                    <Controller
                        control={control}
                        name="brandId"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Бренд"
                                options={brands || []}
                                isLoading={isBrandsLoading}
                                disabled={typeId === undefined}
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Тип">
                    <Controller
                        control={control}
                        name="typeId"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Тип"
                                options={types || []}
                                isLoading={isTypesLoading}
                                disabled={categoryId === undefined || mode === "EDIT"}
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            {
                typeId !== undefined && <FieldsSection title="Свойства">
                    {
                        isParametersLoading
                            ? <div>Loading...</div>
                            : fieldArray.fields.map(({id, parameterId}, index) => {
                                const parameter = parameters?.find(param => String(param.id) === String(parameterId))

                                return (
                                    <>
                                        {
                                            parameter?.format === "CHECKBOX"
                                                ? parameter.type === "TEXT"
                                                    ? <InputGroup title={parameter.title} key={id}>
                                                        <Controller
                                                            control={control}
                                                            name={`info.${index}.checkbox.textValueIds`}
                                                            rules={{
                                                                required: "Это поле обязательное"
                                                            }}
                                                            render={({field, fieldState: {error}}) =>
                                                                <DynamicSelect
                                                                    error={error}
                                                                    field={field}
                                                                    placeholder={parameter.title}
                                                                    options={parameter?.textValues.map(
                                                                        ({value, id}) => ({
                                                                            label: value,
                                                                            value: id
                                                                        })) || []}
                                                                    isMulti
                                                                />
                                                            }
                                                        />
                                                    </InputGroup>
                                                    : parameter.type === "COLOR"
                                                        ? <InputGroup title={parameter.title} key={id}>
                                                            <Controller
                                                                control={control}
                                                                name={`info.${index}.checkbox.colorValueIds`}
                                                                rules={{
                                                                    required: "Это поле обязательное"
                                                                }}
                                                                render={({field, fieldState: {error}}) =>
                                                                    <DynamicSelect
                                                                        error={error}
                                                                        field={field}
                                                                        placeholder={parameter.title}
                                                                        options={parameter?.colorValues.map(
                                                                            ({value, id}) => ({
                                                                                label: value,
                                                                                value: id
                                                                            })) || []}
                                                                        isMulti
                                                                    />
                                                                }
                                                            />
                                                        </InputGroup>
                                                        : parameter.type === "NUMBER"
                                                        && <InputGroup title={parameter.title} key={id}>
                                                            <Controller
                                                                control={control}
                                                                name={`info.${index}.checkbox.numberValueIds`}
                                                                rules={{
                                                                    required: "Это поле обязательное"
                                                                }}
                                                                render={({field, fieldState: {error}}) =>
                                                                    <DynamicSelect
                                                                        error={error}
                                                                        field={field}
                                                                        placeholder={parameter.title}
                                                                        options={parameter?.numberValues.map(
                                                                            ({value, id}) => ({
                                                                                label: String(value),
                                                                                value: id
                                                                            })) || []}
                                                                        isMulti
                                                                    />
                                                                }
                                                            />
                                                        </InputGroup>
                                                : parameter?.format === "RADIO"
                                                    ? parameter.type === "TEXT"
                                                        ? <InputGroup title={parameter.title} key={id}>
                                                            <Controller
                                                                control={control}
                                                                name={`info.${index}.radio.textValueId`}
                                                                rules={{
                                                                    required: "Это поле обязательное"
                                                                }}
                                                                render={({field, fieldState: {error}}) =>
                                                                    <DynamicSelect
                                                                        error={error}
                                                                        field={field}
                                                                        placeholder={parameter.title}
                                                                        options={parameter?.textValues.map(
                                                                            ({value, id}) => ({
                                                                                label: value,
                                                                                value: id
                                                                            })) || []}
                                                                    />
                                                                }
                                                            />
                                                        </InputGroup>
                                                        : parameter.type === "COLOR"
                                                            ? <InputGroup title={parameter.title} key={id}>
                                                                <Controller
                                                                    control={control}
                                                                    name={`info.${index}.radio.colorValueId`}
                                                                    rules={{
                                                                        required: "Это поле обязательное"
                                                                    }}
                                                                    render={({field, fieldState: {error}}) =>
                                                                        <DynamicSelect
                                                                            error={error}
                                                                            field={field}
                                                                            placeholder={parameter.title}
                                                                            options={parameter?.colorValues.map(
                                                                                ({value, id}) => ({
                                                                                    label: value,
                                                                                    value: id
                                                                                })) || []}
                                                                        />
                                                                    }
                                                                />
                                                            </InputGroup>
                                                            : parameter.type === "NUMBER"
                                                            && <InputGroup title={parameter.title} key={id}>
                                                                <Controller
                                                                    control={control}
                                                                    name={`info.${index}.radio.numberValueId`}
                                                                    rules={{
                                                                        required: "Это поле обязательное"
                                                                    }}
                                                                    render={({field, fieldState: {error}}) =>
                                                                        <DynamicSelect
                                                                            error={error}
                                                                            field={field}
                                                                            placeholder={parameter.title}
                                                                            options={parameter?.numberValues.map(
                                                                                ({value, id}) => ({
                                                                                    label: String(value),
                                                                                    value: id
                                                                                })) || []}
                                                                            isMulti={parameter?.format === "CHECKBOX"}
                                                                        />
                                                                    }
                                                                />
                                                            </InputGroup>
                                                    : parameter?.format === "INPUT"
                                                        ? parameter.type === "TEXT"
                                                            ? <InputGroup title={parameter.title} key={id}>
                                                                <Input
                                                                    {...register(`info.${index}.input.textValue.value`, {
                                                                        required: "Это поле обязательно"
                                                                    })}
                                                                    placeholder="Введите заголовок"
                                                                    error={errors.info?.[index]?.input?.textValue?.value}
                                                                />
                                                            </InputGroup>
                                                            : parameter.type === "COLOR"
                                                                ? <InputGroup title={parameter.title} key={id}>
                                                                    <Input
                                                                        {...register(`info.${index}.input.colorValue.title`, {
                                                                            required: "Это поле обязательно"
                                                                        })}
                                                                        placeholder="Введите заголовок"
                                                                        error={errors.info?.[index]?.input?.colorValue?.title}
                                                                    />

                                                                    <Input
                                                                        {...register(`info.${index}.input.colorValue.value`, {
                                                                            required: "Это поле обязательно"
                                                                        })}
                                                                        placeholder="Введите заголовок"
                                                                        error={errors.info?.[index]?.input?.colorValue?.value}
                                                                    />
                                                                </InputGroup>
                                                                : parameter.type === "NUMBER"
                                                                    ? <InputGroup title={parameter.title} key={id}>
                                                                        <Input
                                                                            {...register(`info.${index}.input.numberValue.value`, {
                                                                                required: "Это поле обязательно"
                                                                            })}
                                                                            placeholder={`Введите ${parameter.title}`}
                                                                            error={errors.info?.[index]?.input?.numberValue?.value}
                                                                        />
                                                                    </InputGroup>
                                                                    : parameter.type === "BOOLEAN"
                                                                    && <InputGroup title={parameter.title} key={id}>
                                                                        <Checkbox{...register(`info.${index}.input.booleanValue.value`)}>
                                                                            {parameter.title}
                                                                        </Checkbox>
                                                                    </InputGroup>
                                                        : <></>
                                        }
                                    </>
                                )
                            })
                    }
                </FieldsSection>
            }

            <FieldsSection>
                <InputGroup
                    title="Цена"
                    style={{
                        marginBottom: 0
                    }}
                >
                    <Input
                        {...register('price', {
                            required: "Это поле обязательно"
                        })}
                        placeholder="Введите цену"
                        error={errors.price}
                    />

                    <Checkbox
                        {...register("isDiscount")}
                        isSmall
                        style={{
                            marginTop: 10
                        }}
                    >
                        Добавить скидку
                    </Checkbox>
                </InputGroup>

                {
                    isDiscount && <InputGroup title="Новая цена">
                        <Input
                            {...register('newPrice', {
                                required: "Это поле обязательно"
                            })}
                            placeholder="Введите количество"
                            error={errors.newPrice}
                        />
                    </InputGroup>
                }
            </FieldsSection>

            <FieldsSection>
                <InputGroup title="Количество (*здесь будет счетчик)">
                    <Input
                        {...register('count', {
                            required: "Это поле обязательно"
                        })}
                        placeholder="Введите количество"
                        error={errors.count}
                    />

                    {/*<Counter*/}
                    {/*    {...register('count', {*/}
                    {/*        required: "Это поле обязательно",*/}
                    {/*        valueAsNumber: true,*/}
                    {/*    })}*/}
                    {/*    value={getValues('count')}*/}
                    {/*    setValue={setValue}*/}
                    {/*    error={errors.count}*/}
                    {/*/>*/}

                    {/*<Controller*/}
                    {/*    control={control}*/}
                    {/*    name="categoriesId"*/}
                    {/*    rules={{*/}
                    {/*        required: "Это поле обязательно"*/}
                    {/*    }}*/}
                    {/*    render={({field: {value, onChange}, fieldState: {error}}) =>*/}
                    {/*        <NumericInput*/}
                    {/*            mobile*/}
                    {/*            value={getValues('count')}*/}
                    {/*            onChange={onChange}*/}
                    {/*            minLength={0}*/}
                    {/*            pattern="[0-9]"*/}
                    {/*            style={{*/}
                    {/*                wrap: {*/}
                    {/*                    fontSize: 32*/}
                    {/*                },*/}
                    {/*                input: {*/}
                    {/*                    borderRadius: '4px 2px 2px 4px',*/}
                    {/*                    color: '#988869',*/}
                    {/*                    padding: '0.1ex 1ex',*/}
                    {/*                    border: '1px solid #ccc',*/}
                    {/*                    marginRight: 4,*/}
                    {/*                    display: 'block',*/}
                    {/*                    fontWeight: 100,*/}
                    {/*                    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'*/}
                    {/*                },*/}
                    {/*                'input:focus' : {*/}
                    {/*                    border: '1px inset #69C',*/}
                    {/*                    outline: 'none'*/}
                    {/*                },*/}
                    {/*                arrowUp: {*/}
                    {/*                    borderBottomColor: 'rgba(66, 54, 0, 0.63)'*/}
                    {/*                },*/}
                    {/*                arrowDown: {*/}
                    {/*                    borderTopColor: 'rgba(66, 54, 0, 0.63)'*/}
                    {/*                }*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*/>*/}
                </InputGroup>
            </FieldsSection>

            <ButtonGreen disabled={disabled}>Сохранить</ButtonGreen>
        </Form>
    );
};

export default AdminProductForm;