import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {Controller, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import dynamic from "next/dynamic";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {useCategoryEdit} from "@/webpages/AdminCategory/useCategoryEdit";
import {ICategoryFields} from "@/types/types";
import {IAbout} from "@/models/IAbout";
import {useAboutEdit} from "@/webpages/AdminAbout/useAboutEdit";
import {stripHtml} from "string-strip-html";

const DynamicTextEditor = dynamic(() => import('@/UI/InputGroup/TextEditor/TextEditor'), {
    ssr: false
});

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const AdminCategory: FC = () => {
    const {
        register, handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset, resetField, control,
        getValues, setValue,
        watch
    } = useForm<IAbout>({
        mode: "onChange"
    });

    const {onSubmit, isLoading, data} = useAboutEdit(setValue);
    const about = data?.data;

    return (
        <>
            {
                isLoading
                    ? <div>loading...</div>
                    : <Admin title={` > О компании`}>
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
                                            placeholder="Текст"
                                        />
                                    }
                                />
                            </InputGroup>

                            <ButtonGreen>Сохранить</ButtonGreen>
                        </Form>
                    </Admin>
            }
        </>
    );
}

export default AdminCategory;

