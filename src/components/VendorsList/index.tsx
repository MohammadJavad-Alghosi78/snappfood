// node_modules
import { Ref, forwardRef } from "react";
import { useSelector } from "react-redux";
// components
import { Card, Loading, Typography } from "@/components";
// types
import { IFinalResult } from "@/services/vendors/types";
// store
import { RootState } from "@/redux/store";
// styles
import styles from "./vendors-list.module.scss";

const VendorsList = forwardRef(function VendorsList(_, ref: Ref<HTMLElement>) {
  const { vendors, loading, errorMessage } = useSelector(
    (state: RootState) => state.vendors
  );

  if (errorMessage) {
    return (
      <div className={styles.error_wrapper}>
        <Typography tag="h6">{errorMessage}</Typography>
      </div>
    );
  }

  return (
    <div className={styles.vendors_wrapper}>
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
