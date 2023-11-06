import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Services/authSlice"
import projectListReducer from "../features/projectList/Service/projectListSlice"
export const store=configureStore({
reducer:{
    auth:authReducer,
    projectList:projectListReducer
}
})