// node_modules
import { useSelector } from "react-redux";
// components
import { Card } from "@/components";
// styles
import "./vendors-list.scss";
import { RootState } from "@/redux/store";
import { IFinalResult } from "@/services/vendors/types";
import { LegacyRef, Ref, forwardRef } from "react";

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
          numOfVotes={vendor.data.countOfUserImages}
          rating={vendor.data.rate}
          restaurantLogo={vendor.data.defLogo}
        />
      ))}
      {loading && <h1>Loading ...</h1>}
    </div>
  );
});

export default VendorsList;
