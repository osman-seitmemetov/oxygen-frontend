import React, {FC, memo} from "react";
import styles from './ProductsFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {useProductsFilter} from "@/components/Products/useProductsFilter";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import MultipleScrollArea from "@/UI/InputGroup/MultipleScrollArea/MultipleScrollArea";
import {IProductsFilterFields} from "@/webpages/Category/Category";
import Input from "@/UI/InputGroup/Input/Input";
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
                        ? <ProductsFilterLoader/>
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
                    fields.map((parameter, index) => {
                        const values = productsFilter?.parameters?.find(p => Number(p.id) === parameter.parameterId)?.values;
                        console.log('parameter', parameter)
                        console.log('values', values)
                        console.log('productsFilter?.parameters', productsFilter?.parameters)

                        return (
                            <ProductsFilterGroup
                                key={parameter.id}
                                title={parameter.title}
                            >
                                {
                                    parameter?.format === "CHECKBOX"
                                        ? parameter.type === "COLOR"
                                            // сделать MultipleScrollArea для color
                                            ? <Controller
                                                control={control}
                                                name={`parameters.${index}.valueIds` as const}
                                                rules={{
                                                    required: "Это поле обязательное"
                                                }}
                                                render={({field, fieldState: {error}}) =>
                                                    <MultipleScrollArea
                                                        groupName={parameter.title}
                                                        error={error}
                                                        options={values?.map(val => ({
                                                            id: Number(val.id),
                                                            value: String(val.title)
                                                        })) || []}
                                                        field={field}
                                                        isMulti
                                                    />
                                                }
                                            />
                                            : <Controller
                                                control={control}
                                                name={`parameters.${index}.valueIds` as const}
                                                rules={{
                                                    required: "Это поле обязательное"
                                                }}
                                                render={({field, fieldState: {error}}) =>
                                                    <MultipleScrollArea
                                                        groupName={parameter.title}
                                                        error={error}
                                                        options={values?.map(val => ({
                                                            id: Number(val.id),
                                                            value: String(val.title)
                                                        })) || []}
                                                        field={field}
                                                        isMulti
                                                    />
                                                }
                                            />
                                        : parameter?.format === "RADIO"
                                            ? parameter.type === "COLOR"
                                                ? <Controller
                                                    control={control}
                                                    name={`parameters.${index}.valueId` as const}
                                                    rules={{
                                                        required: "Это поле обязательное"
                                                    }}
                                                    render={({field, fieldState: {error}}) =>
                                                        <MultipleScrollArea
                                                            groupName={parameter.title}
                                                            error={error}
                                                            options={values?.map(val => ({
                                                                id: Number(val.id),
                                                                value: String(val.title)
                                                            })) || []}
                                                            field={field}
                                                        />
                                                    }
                                                />
                                                : <Controller
                                                    control={control}
                                                    name={`parameters.${index}.valueId` as const}
                                                    rules={{
                                                        required: "Это поле обязательное"
                                                    }}
                                                    render={({field, fieldState: {error}}) =>
                                                        <MultipleScrollArea
                                                            groupName={parameter.title}
                                                            error={error}
                                                            options={values?.map(val => ({
                                                                id: Number(val.id),
                                                                value: String(val.value)
                                                            })) || []}
                                                            field={field}
                                                        />
                                                    }
                                                />
                                            : parameter?.format === "INPUT"
                                                ? parameter.type === "COLOR"
                                                    ? <>
                                                        <Input
                                                            {...register(`parameters.${index}.value.title`, {
                                                                required: "Это поле обязательно"
                                                            })}
                                                            placeholder="Введите заголовок"
                                                            error={errors.parameters?.[index]?.value?.title}
                                                        />

                                                        <Input
                                                            {...register(`parameters.${index}.value.value`, {
                                                                required: "Это поле обязательно"
                                                            })}
                                                            placeholder="Введите заголовок"
                                                            error={errors.parameters?.[index]?.value?.value}
                                                        />
                                                    </>
                                                    : parameter.type === "BOOLEAN"
                                                        ? <Checkbox{...register(`parameters.${index}.value`)}>
                                                            {parameter.title}
                                                        </Checkbox>
                                                        : <Input
                                                            {...register(`parameters.${index}.value.value`, {
                                                                required: "Это поле обязательно"
                                                            })}
                                                            placeholder={`Введите ${parameter.title}`}
                                                            error={errors.parameters?.[index]?.value?.value}
                                                        />
                                                : <></>
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

export default memo(ProductsFilter);