import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productSlice";
import  basketSlice  from "./reducers/basketSlice";


export const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice

        
    }
})