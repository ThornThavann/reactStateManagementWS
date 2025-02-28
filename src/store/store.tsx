import { configureStore } from "@reduxjs/toolkit";
import shoppingRedducer from "./shoppingSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer:{
        shopping: shoppingRedducer,
        user: userReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;