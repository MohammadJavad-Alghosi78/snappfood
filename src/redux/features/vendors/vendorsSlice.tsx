"use client";
// node_modules
import { createSlice } from "@reduxjs/toolkit";
// constants
import { initialState } from "./constants";

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    fetchVendors: (state) => ({
      ...state,
      loading: true,
    }),
    setVendorsData: (state, action) => ({
      ...state,
      loading: false,
      vendors: action.payload,
    }),
    setVendorsError: (state, action) => ({
      ...state,
      loading: false,
      vendors: [],
      errorMessage: action.payload,
    }),
  },
});

export const { fetchVendors, setVendorsData, setVendorsError } =
  vendorsSlice.actions;

export default vendorsSlice.reducer;
