import React, {FC} from "react";
import styles from './ProductsFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import ButtonTransparent from "@/components/UI/buttons/ButtonTransparent/ButtonTransparent";
import Link from "next/link";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {useProductsFilter} from "@/components/Products/useProductsFilter";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import MultipleScrollArea from "@/UI/InputGroup/MultipleScrollArea/MultipleScrollArea";
import {IProductsFilterFields} from "@/webpages/Category/Category";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";

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
                        ? <div>Loading...</div>
                        : productsFilter ? <>
                                <div className={styles.filter}>
                                    <div className={styles.filter__title}>Категории</div>

                                    {
                                        productsFilter.parent1Lvl
                                        &&
                                        <Link href={`/categories/${productsFilter.parent1Lvl.id}`} className={styles.category_back}>
                                            {`< ${productsFilter.parent1Lvl.name}`}
                                        </Link>
                                    }

                                    {
                                        productsFilter.parent2Lvl
                                        &&
                                        <Link href={`/categories/${productsFilter.parent2Lvl.id}`} className={styles.category_back}>
                                            {`< ${productsFilter.parent2Lvl.name}`}
                                        </Link>
                                    }

                                    <div className={styles.category}>{category.name}</div>

                                    {
                                        productsFilter.childCategory2Lvls?.map(childCategory =>
                                            <Link href={`/categories/${childCategory.id}`}
                                                  key={childCategory.id}
                                                  className={styles.category_child}
                                            >
                                                {childCategory.name}
                                            </Link>
                                        )
                                    }

                                    {
                                        String(category.lvl) === "2" && productsFilter.childCategory3Lvls?.map(childCategory =>
                                            <Link style={{display: "inline-flex", marginLeft: 10}}
                                                  href={`/categories/${childCategory.id}`}
                                                  key={childCategory.id}>
                                                {childCategory.name}
                                            </Link>
                                        )
                                    }
                                </div>

                                <div className={styles.filter}>
                                    <h3 className={styles.filter__title}>Типы:</h3>

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
                                </div>

                                <div className={styles.filter}>
                                    <h3 className={styles.filter__title}>Бренды:</h3>

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
                                </div>
                            </>
                            : <div>Возникла ошибка при загрузке</div>
                }

                {
                    fields.map((param, index) => {
                        const colorValues = productsFilter?.parameters.find(parameter => Number(parameter.id) === param.parameterId)?.colorValues;
                        const textValues = productsFilter?.parameters.find(parameter => Number(parameter.id) === param.parameterId)?.textValues;
                        const numberValues = productsFilter?.parameters.find(parameter => Number(parameter.id) === param.parameterId)?.numberValues;

                        return (
                            <div key={param.id} className={styles.filter}>

                                <div className={styles.filter__title}>{param.title}</div>

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
                            </div>
                        )
                    })
                }

                <div className={styles.filter}>
                    <div className={styles.filter__title}>Стоимость в рублях</div>

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
                </div>

                <Checkbox className={styles.checkbox}>Акции</Checkbox>
                <Checkbox className={styles.checkbox}>В наличии</Checkbox>

                <ButtonGreen type="submit" className={styles.submit}>Применить</ButtonGreen>
                <ButtonTransparent type="reset">Сбросить</ButtonTransparent>
            </form>
        </>
    );
}

export default ProductsFilter;