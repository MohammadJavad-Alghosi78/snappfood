"use client";
// node_modules
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// store
import {
  fetchVendors,
  setVendorsError,
} from "../../_redux/features/vendors/vendorsSlice";
import { IVendorsState } from "@/_redux/features/vendors/types";

const Vendors = () => {
  const data = useSelector((state: IVendorsState) => state.vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchVendors());
        const data = await axios.get(
          "https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=1&page_size:10&lat=35.754&long=51.328"
        );
        console.log(data);
      } catch (error) {
        dispatch(setVendorsError({ payload: "Errrrrrrrrrrror" }));
      }
    })();
  }, []);

  return (
    <>
      <h1>test</h1>
    </>
  );
};

export default Vendors;
