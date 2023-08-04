import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slice/todoslice";


export const store = configureStore({
    reducer: {
        todo:todoslice
    }
})
