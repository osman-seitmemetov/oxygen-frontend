import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {stripHtml} from "string-strip-html";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";
import {IBannerFields} from "@/components/forms/AdminBannerForm/useAdminBannerForm";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

interface AdminBannerFormProps {
    onSubmit: SubmitHandler<IBannerFields>,
    disabled: boolean,
}

const AdminBannerForm: FC<AdminBannerFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IBannerFields>();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Заголовок" autoMargin>
                <Input
                    {...register('title', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите название"
                    error={errors.title}
                />
            </InputGroup>

            <InputGroup title="Ссылка (необязательно)" autoMargin>
                <Input
                    {...register('link', {})}
                    placeholder="Введите название"
                    error={errors.link}
                />
            </InputGroup>

            <InputGroup title="Текст" autoMargin>
                <Controller
                    control={control}
                    name="text"
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
                <InputGroup title="Изображение (размер 0000 Х 0000)">
                    <Controller
                        control={control}
                        name="img"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <ImageUploader
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Баннер"
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="Цвет фона">
                    {/*<div>Здесь будет колорпикер</div>*/}
                    <div>
                        <Controller
                            control={control}
                            name="color"
                            rules={{
                                // required: "Это поле обязательно"
                            }}
                            render={({field}) =>
                                <input type="color" {...field} />
                            }
                        />
                    </div>
                </InputGroup>
            </FieldsSection>

            <PrimaryButton disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminBannerForm;