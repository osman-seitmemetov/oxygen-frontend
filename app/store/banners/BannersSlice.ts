import {createSlice} from "@reduxjs/toolkit";
import {IBanner} from "../../models/IBanner";
import BannerImg from "../../assets/img/slider.jpg";

interface bannersState {
    banners: IBanner[]
}

const initialState: bannersState = {
    banners: [
        {
            id: 1,
            title: "Всегда свежие молочные продукты",
            text: "Только качественные товары, за которыми мы всегда следим",
            link: '',
            img: BannerImg
        },
        {
            id: 2,
            title: "Всегда свежие продукты",
            text: "Только качественные товары, за которыми мы всегда следим",
            link: '',
            img: BannerImg
        }
    ]
}

export const bannersSlice = createSlice({
    name: 'banners',
    initialState,
    reducers: {
        prbannersFetching() {

        }
    }
})

export default bannersSlice.reducer;