"use client";
// node_modules
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// components
import VendorsList from ".";
// services
import { VendorServices } from "@/services";
// constants
import { defaultParams } from "@/constants";
// redux
import {
  fetchVendors,
  setVendorsData,
  setVendorsError,
} from "@/redux/features/vendors/vendorsSlice";

const VendorsListContainer = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [lastElement, setLastElement] = useState<HTMLElement | null>(null);

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPage((page) => page + 1);
    }
  });

  useEffect(() => {
    if (lastElement) {
      observerRef.observe(lastElement);
    }

    // This is for update lastelement(preventing send next request)
    return () => {
      if (lastElement) observerRef.unobserve(lastElement);
    };
  }, [lastElement]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchVendors());
        const {
          data: {
            data: { finalResult },
          },
        } = await VendorServices.getVendords({
          ...defaultParams,
          page,
        });

        // Prevent sending request when we have no item
        !!finalResult.length
          ? dispatch(setVendorsData(finalResult))
          : setLastElement(null);
      } catch (error) {
        dispatch(setVendorsError("Error has been occured"));
      }
    })();
  }, [page]);

  return <VendorsList ref={setLastElement} />;
};

export default VendorsListContainer;
