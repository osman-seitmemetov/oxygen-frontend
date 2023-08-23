import {FC} from "react";
import type {AppProps} from 'next/app';
import MainProvider from "../app/providers/MainProvider";
import {TypeComponentAuthFields} from "@/types/authProvider";
import '@/assets/scss/App.scss';
import "@/components/UI/InputGroup/SelectCustom/SelectCustom.scss";
import "@/webpages/Search/SearchItems/SearchItemsFilter/SearchItemsFilter.scss";
import "react-datepicker/dist/react-datepicker.css";
import "@/components/UI/InputGroup/InputDate/InputDate.scss";
import "react-loading-skeleton/dist/skeleton.css";
import 'swiper/scss';
import 'swiper/scss/navigation';


type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp: FC<TypeAppProps> = ({Component, pageProps}) => {
    return (
        <MainProvider Component={Component}>
            <Component {...pageProps} />
        </MainProvider>
    )
}

export default MyApp
