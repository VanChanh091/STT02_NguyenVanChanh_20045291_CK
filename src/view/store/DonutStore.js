import { configureStore } from "@reduxjs/toolkit";
import donutReducer from '../features/DonutSlice'

export const store = configureStore({
    reducer:{
        donuts: donutReducer,
    }
})