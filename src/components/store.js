import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from '../features/employees'
export const store=configureStore({
    reducer:{
        employe:employeeReducer,
    },
})