"use client";
// node_modules
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import vendorsReducer from "./features/vendors/vendorsSlice";

const rootReducer = combineReducers({
  vendors: vendorsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
