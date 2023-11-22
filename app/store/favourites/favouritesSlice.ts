import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchFavourites} from "@/store/favourites/FavouritesActionCreators";

interface eventsState {
    eventIds: number[],
    eventIdsSelected: number[]
}

const initialState: eventsState = {
    eventIds: [],
    eventIdsSelected: [],
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        favouritesSelect(state, action: PayloadAction<number>) {
            state.eventIdsSelected = [...state.eventIdsSelected, action.payload];
        },

        favouritesDeselect(state, action: PayloadAction<number>) {
            state.eventIdsSelected = state.eventIdsSelected.filter(id => id !== action.payload);
        },

        favouritesAdd(state, action: PayloadAction<number>) {
            state.eventIds = [...state.eventIds, action.payload];
        },

        favouritesDelete(state, action: PayloadAction<number>) {
            state.eventIds = state.eventIds.filter(id => id !== action.payload);
        },

        favouritesDeleteAll(state) {
            state.eventIds = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavourites.fulfilled, (state, action: PayloadAction<number[]>) => {
            state.eventIds = action.payload;
        })
    }
})

export const favouritesActions = favouritesSlice.actions;
export default favouritesSlice.reducer;