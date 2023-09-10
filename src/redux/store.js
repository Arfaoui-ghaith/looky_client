import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import dataReducer from "./slices/data";
import { apiSlice } from "./slices/api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware
    ),
    devTools: true
});

export default store;