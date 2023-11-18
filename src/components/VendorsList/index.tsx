// node_modules
import { Ref, forwardRef } from "react";
import { useSelector } from "react-redux";
// components
import { Card, Loading, Typography } from "@/components";
// types
import { IFinalResult, IFinalResultData } from "@/services/vendors/types";
// store
import { RootState } from "@/redux/store";
// styles
import styles from "./vendors-list.module.scss";

const VendorsList = forwardRef(function VendorsList(_, ref: Ref<HTMLElement>) {
  const { vendors, loading, errorMessage } = useSelector(
    (state: RootState) => state.vendors
  );

  const updatedVendors = vendors?.map((vendor: IFinalResult) => vendor.data);

  if (errorMessage) {
    return (
      <div className={styles.error_wrapper}>
        <Typography tag="h6">{errorMessage}</Typography>
      </div>
    );
  }

  return (
    <div className={styles.vendors_wrapper}>
      {updatedVendors?.map((vendor: IFinalResultData, index: number) => (
        <Card
          key={vendor.id.toString().concat(index.toString())}
          ref={ref}
          restaurantTitle={vendor.title}
          coverImage={vendor.backgroundImage}
          deliveryPrice={vendor.deliveryFee}
          description={vendor.description}
          rating={vendor.rate}
          restaurantLogo={vendor.defLogo}
        />
      ))}
      {loading && <Loading />}
    </div>
  );
});

export default VendorsList;
