import { configureStore } from "@reduxjs/toolkit";
import { AllProductsApi } from "../features/AllProductsApi";

export const store = configureStore({
    reducer:{
        [AllProductsApi.reducerPath] : AllProductsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AllProductsApi.middleware)
})

