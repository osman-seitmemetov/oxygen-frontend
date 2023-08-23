import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {Controller, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import dynamic from "next/dynamic";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {IBannerFields, ICategoryFields, IOrderFields} from "@/types/types";
import {stripHtml} from "string-strip-html";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import {useBannerEdit} from "@/webpages/AdminBanner/useBannerEdit";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import style from "@/webpages/AdminOrder/OrderDetail.module.scss";
import OrderDetailInfo from "@/webpages/AdminOrder/OrderDetailInfo/OrderDetailInfo";
import HistoryDetailProducts from "@/webpages/AdminOrder/OrderDetailProducts/OrderDetailProducts";
import {useOrderEdit} from "@/webpages/AdminOrder/useOrderEdit";


const AdminOrder: FC = () => {
    const {
        register, handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset, resetField, control,
        getValues, setValue,
        watch
    } = useForm<IOrderFields>({
        mode: "onChange"
    });

    const {onSubmit, isLoading, data} = useOrderEdit(setValue);
    const order = data?.data;

    return (
        <>
            {
                isLoading
                    ? <div>loading...</div>
                    : <div className={style.ordering}>
                        {/*<OrderDetailInfo order={order}/>*/}
                        {/*<HistoryDetailProducts products={order.order_products}/>*/}
                    </div>
                // <Admin title={` > Баннеры > ${banner?.title}`}>
                //         <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                //             <InputGroup title="Заголовок" autoMargin>
                //                 <Input
                //                     {...register('title', {
                //                         required: "Это поле обязательно"
                //                     })}
                //                     placeholder="Введите название"
                //                     error={errors.title}
                //                 />
                //             </InputGroup>
                //
                //             <InputGroup title="Ссылка (необязательно)" autoMargin>
                //                 <Input
                //                     {...register('link', {})}
                //                     placeholder="Введите название"
                //                     error={errors.link}
                //                 />
                //             </InputGroup>
                //
                //             <InputGroup title="Текст" autoMargin>
                //                 <Controller
                //                     control={control}
                //                     name="text"
                //                     rules={{
                //                         validate: {
                //                             required: (v) => (v && stripHtml(v).result.length > 0) || 'Это поле обязательно'
                //                         }
                //                     }}
                //                     render={({field: {value, onChange}, fieldState: {error}}) =>
                //                         <DynamicTextEditor
                //                             onChange={onChange}
                //                             value={value}
                //                             error={error}
                //                             placeholder="Описание категории"
                //                         />
                //                     }
                //                 />
                //             </InputGroup>
                //
                //             <FieldsSection>
                //                 <InputGroup title="Изображение (размер 1111 Х 1111)">
                //                     <Controller
                //                         control={control}
                //                         name="img"
                //                         rules={{
                //                             required: "Это поле обязательно"
                //                         }}
                //                         render={({field: {onChange, value}, fieldState: {error}}) =>
                //                             <ImageUploader
                //                                 onChange={onChange}
                //                                 value={value}
                //                                 error={error}
                //                                 placeholder="Баннер"
                //                             />
                //                         }
                //                     />
                //                 </InputGroup>
                //
                //                 <InputGroup title="Цвет фона">
                //                     {/*<div>Здесь будет колорпикер</div>*/}
                //                     <div>
                //                         <Controller
                //                             control={control}
                //                             name="color"
                //                             rules={{
                //                                 // required: "Это поле обязательно"
                //                             }}
                //                             render={({field, fieldState: {error}}) =>
                //                                 <input type="color" {...field} />
                //                             }
                //                         />
                //                     </div>
                //                 </InputGroup>
                //             </FieldsSection>
                //
                //             <ButtonGreen>Сохранить</ButtonGreen>
                //         </Form>
                //     </Admin>
            }
        </>
    );
}

export default AdminOrder;

