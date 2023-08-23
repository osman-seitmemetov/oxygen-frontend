import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {stripHtml} from "string-strip-html";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {IArticleFields} from "@/components/forms/AdminArticleForm/useAdminArticleForm";
import dynamic from "next/dynamic";
import Form from "@/components/Form/Form";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

interface AdminArticleFormProps {
    onSubmit: SubmitHandler<IArticleFields>,
    disabled: boolean,
}

const AdminArticleForm: FC<AdminArticleFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IArticleFields>();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <InputGroup title="Заголовок" autoMargin>
                <Input
                    {...register('title', {
                        required: "Это поле обязательно"
                    })}
                    placeholder="Введите заголовок"
                    error={errors.title}
                />
            </InputGroup>

            <InputGroup title="Текст" autoMargin>
                <Controller
                    control={control}
                    name="text"
                    defaultValue=""
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
                            placeholder="Текст статьи"
                        />
                    }
                />
            </InputGroup>

            <FieldsSection>
                <InputGroup title="Превью">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="previewImg"
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

                <InputGroup title="Баннер">
                    <Controller
                        control={control}
                        defaultValue=""
                        name="bannerImg"
                        rules={{}}
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <ImageUploader
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="banner"
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            <ButtonGreen disabled={disabled}>Сохранить</ButtonGreen>
        </Form>
    );
};

export default AdminArticleForm;