"use client";
// node_modules
import { useState } from "react";
// components
import VendorsList from ".";
// hooks
import { useGetVendors } from "@/hooks";

const VendorsListContainer = () => {
  const [page, setPage] = useState(1);

  const { vendors } = useGetVendors(page);

  return <VendorsList vendors={vendors} />;
};

export default VendorsListContainer;
