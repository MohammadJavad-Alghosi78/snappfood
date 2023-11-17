// node_modules
import { Ref, forwardRef } from "react";
import { useSelector } from "react-redux";
// components
import { Card, Loading } from "@/components";
// types
import { IFinalResult } from "@/services/vendors/types";
// store
import { RootState } from "@/redux/store";
// styles
import "./vendors-list.scss";

const VendorsList = forwardRef(function VendorsList(_, ref: Ref<HTMLElement>) {
  const { vendors, loading } = useSelector((state: RootState) => state.vendors);
  return (
    <div className="vendors_wrapper">
      {vendors?.map((vendor: IFinalResult, index: number) => (
        <Card
          key={index.toString()}
          ref={ref}
          restaurantTitle={vendor.data.title}
          coverImage={vendor.data.backgroundImage}
          deliveryPrice={vendor.data.deliveryFee}
          description={vendor.data.description}
          rating={vendor.data.rate}
          restaurantLogo={vendor.data.defLogo}
        />
      ))}
      {loading && <Loading />}
    </div>
  );
});

export default VendorsList;
