import React, {FC} from "react";
import styles from './ProductsFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import Link from "next/link";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {useProductsFilter} from "@/components/Products/useProductsFilter";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import MultipleScrollArea from "@/UI/InputGroup/MultipleScrollArea/MultipleScrollArea";
import {IProductsFilterFields} from "@/webpages/Category/Category";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import ProductsFilterGroup from "@/components/Products/ProductsFilter/ProductsFilterGroup/ProductsFilterGroup";
import ProductsFilterCategories
    from "@/components/Products/ProductsFilter/ProductsFilterCategories/ProductsFilterCategories";
import ProductsFilterLoader from "@/components/Products/ProductsFilter/ProductsFilterLoader/ProductsFilterLoader";

interface ProductFilterProps {
    category: ICategoryFields,
}

const ProductsFilter: FC<ProductFilterProps> = ({category}) => {
    const {control, register, formState: {errors}} = useFormContext<IProductsFilterFields>();
    const {append, fields, remove} = useFieldArray({control, name: "parameters"});

    const {isLoading, data} = useProductsFilter(append, remove);
    const productsFilter = data?.data;

    return (
        <>
            <form className={styles.sidebar}>
                {
                    isLoading
                        ? <ProductsFilterLoader />
                        : productsFilter ? <>
                                <ProductsFilterCategories
                                    category={category}
                                    parent1Lvl={productsFilter.parent1Lvl}
                                    parent2Lvl={productsFilter.parent2Lvl}
                                    childCategory2Lvls={productsFilter.childCategory2Lvls || []}
                                    childCategory3Lvls={productsFilter.childCategory3Lvls}
                                />

                                <ProductsFilterGroup title="Типы">
                                    <Controller
                                        control={control}
                                        name="typeIds"
                                        rules={{
                                            required: "Это поле обязательно"
                                        }}
                                        render={({field, fieldState: {error}}) =>
                                            <MultipleScrollArea
                                                groupName="Типы"
                                                error={error}
                                                options={productsFilter?.types.map(type => ({
                                                    id: Number(type.id),
                                                    value: type.name
                                                }))}
                                                field={field}
                                                isMulti
                                            />
                                        }
                                    />
                                </ProductsFilterGroup>

                                <ProductsFilterGroup title="Бренды">
                                    <Controller
                                        control={control}
                                        name="brandIds"
                                        rules={{
                                            required: "Это поле обязательное"
                                        }}
                                        render={({field, fieldState: {error}}) =>
                                            <MultipleScrollArea
                                                groupName="Бренды"
                                                error={error}
                                                options={productsFilter?.brands.map(brand => ({
                                                    id: Number(brand.id),
                                                    value: brand.name
                                                })) || []}
                                                field={field}
                                                isMulti
                                            />
                                        }
                                    />
                                </ProductsFilterGroup>
                            </>
                            : <div>Возникла ошибка при загрузке</div>
                }

                {
                    fields.map((param, index) => {
                        const colorValues = productsFilter?.parameters?.find(parameter => Number(parameter.id) === param.parameterId)?.colorValues;
                        const textValues = productsFilter?.parameters?.find(parameter => Number(parameter.id) === param.parameterId)?.textValues;
                        const numberValues = productsFilter?.parameters?.find(parameter => Number(parameter.id) === param.parameterId)?.numberValues;

                        return (
                            <ProductsFilterGroup
                                key={param.id}
                                title={param.title}
                            >
                                {
                                    param.type === "COLOR"
                                        ? param.format === "CHECKBOX"
                                            ? <Controller
                                                control={control}
                                                name={`parameters.${index}.checkbox.colorValueIds` as const}
                                                rules={{
                                                    required: "Это поле обязательное"
                                                }}
                                                render={({field, fieldState: {error}}) =>
                                                    <MultipleScrollArea
                                                        groupName={param.title}
                                                        error={error}
                                                        options={colorValues?.map(val => ({
                                                            id: Number(val.id),
                                                            value: val.title
                                                        })) || []}
                                                        field={field}
                                                        isMulti
                                                    />
                                                }
                                            />
                                            : param.format === "RADIO"
                                                ? <Controller
                                                    control={control}
                                                    name={`parameters.${index}.radio.colorValueId` as const}
                                                    rules={{
                                                        required: "Это поле обязательное"
                                                    }}
                                                    render={({field, fieldState: {error}}) =>
                                                        <MultipleScrollArea
                                                            groupName={param.title}
                                                            error={error}
                                                            options={colorValues?.map(val => ({
                                                                id: Number(val.id),
                                                                value: val.title
                                                            })) || []}
                                                            field={field}
                                                        />
                                                    }
                                                />
                                                : param.format === "INPUT"
                                                && <Input
                                                    {...register(`parameters.${index}.input.colorValue` as const, {
                                                        required: "Это поле обязательно"
                                                    })}
                                                    placeholder={`Введите ${param.title.toLowerCase()}`}
                                                    // @ts-ignore
                                                    error={errors.parameters?.[index]?.input?.colorValue}
                                                />
                                        : param.type === "TEXT"
                                            ? param.format === "CHECKBOX"
                                                ? <Controller
                                                    control={control}
                                                    name={`parameters.${index}.checkbox.textValueIds` as const}
                                                    rules={{
                                                        required: "Это поле обязательное"
                                                    }}
                                                    render={({field, fieldState: {error}}) =>
                                                        <MultipleScrollArea
                                                            groupName={param.title}
                                                            error={error}
                                                            options={textValues?.map(val => ({
                                                                id: Number(val.id),
                                                                value: val.value
                                                            })) || []}
                                                            field={field}
                                                            isMulti
                                                        />
                                                    }
                                                />
                                                : param.format === "RADIO"
                                                    ? <Controller
                                                        control={control}
                                                        name={`parameters.${index}.radio.textValueId` as const}
                                                        rules={{
                                                            required: "Это поле обязательное"
                                                        }}
                                                        render={({field, fieldState: {error}}) =>
                                                            <MultipleScrollArea
                                                                groupName={param.title}
                                                                error={error}
                                                                options={textValues?.map(val => ({
                                                                    id: Number(val.id),
                                                                    value: val.value
                                                                })) || []}
                                                                field={field}
                                                            />
                                                        }
                                                    />
                                                    : param.format === "INPUT"
                                                    && <Input
                                                        {...register(`parameters.${index}.input.textValue` as const, {
                                                            required: "Это поле обязательно"
                                                        })}
                                                        placeholder={`Введите ${param.title.toLowerCase()}`}
                                                        // @ts-ignore
                                                        error={errors.parameters?.[index]?.input?.textValue}
                                                    />
                                            : param.type === "NUMBER"
                                                ? param.format === "CHECKBOX"
                                                    ? <Controller
                                                        control={control}
                                                        name={`parameters.${index}.checkbox.numberValueIds` as const}
                                                        rules={{
                                                            required: "Это поле обязательное"
                                                        }}
                                                        render={({field, fieldState: {error}}) =>
                                                            <MultipleScrollArea
                                                                groupName={param.title}
                                                                error={error}
                                                                options={numberValues?.map(val => ({
                                                                    id: Number(val.id),
                                                                    value: String(val.value)
                                                                })) || []}
                                                                field={field}
                                                                isMulti
                                                            />
                                                        }
                                                    />
                                                    : param.format === "RADIO"
                                                        ? <Controller
                                                            control={control}
                                                            name={`parameters.${index}.radio.numberValueId` as const}
                                                            rules={{
                                                                required: "Это поле обязательное"
                                                            }}
                                                            render={({field, fieldState: {error}}) =>
                                                                <MultipleScrollArea
                                                                    groupName={param.title}
                                                                    error={error}
                                                                    options={numberValues?.map(val => ({
                                                                        id: Number(val.id),
                                                                        value: String(val.value)
                                                                    })) || []}
                                                                    field={field}
                                                                />
                                                            }
                                                        />
                                                        : param.format === "INPUT"
                                                        && <div className={styles.filter__settings}>
                                                            <div className={styles.filter__setting}>
                                                                от
                                                                <input
                                                                    {...register(`parameters.${index}.input.numberValueMin.value` as const, {
                                                                        required: "Это поле обязательно"
                                                                    })}
                                                                    type="text"
                                                                    inputMode="numeric"
                                                                    className={styles.filter__input}
                                                                    placeholder="0 дюймов"
                                                                />
                                                            </div>

                                                            <div className={styles.filter__setting}>
                                                                до
                                                                <input
                                                                    {...register(`parameters.${index}.input.numberValueMax.value` as const, {
                                                                        required: "Это поле обязательно"
                                                                    })}
                                                                    type="text"
                                                                    inputMode="numeric"
                                                                    className={styles.filter__input}
                                                                    placeholder="0 дюймов"
                                                                />
                                                            </div>
                                                        </div>
                                                : (param.type === "BOOLEAN" && param.format === "INPUT")
                                                && <InputGroup title="Название" autoMargin>
                                                    <Input
                                                        {...register(`parameters.${index}.input.textValue` as const, {
                                                            required: "Это поле обязательно"
                                                        })}
                                                        placeholder="Введите заголовок"
                                                        // @ts-ignore
                                                        error={errors.parameters?.[index]?.input?.textValue}
                                                    />
                                                </InputGroup>

                                }
                            </ProductsFilterGroup>
                        )
                    })
                }

                <ProductsFilterGroup title="Стоимость в рублях">
                    <div className={styles.filter__settings}>
                        <div className={styles.filter__setting}>
                            от
                            <input
                                {...register('priceMin', {
                                    required: "Это поле обязательно"
                                })}
                                type="text"
                                inputMode="numeric"
                                className={styles.filter__input}
                                placeholder="0 руб"
                            />
                        </div>

                        <div className={styles.filter__setting}>
                            до
                            <input
                                {...register('priceMax', {
                                    required: "Это поле обязательно"
                                })}
                                type="text"
                                inputMode="numeric"
                                className={styles.filter__input}
                                placeholder="0 руб"
                            />
                        </div>
                    </div>
                </ProductsFilterGroup>

                <Checkbox className={styles.checkbox}>Акции</Checkbox>
                <Checkbox className={styles.checkbox}>В наличии</Checkbox>

                <PrimaryButton type="submit" className={styles.submit}>Применить</PrimaryButton>
                <SecondaryButton type="reset">Сбросить</SecondaryButton>
            </form>
        </>
    );
}

export default ProductsFilter;