// components
import { Card } from "@/components";
// types
import { IVendorsListProps } from "./types";

const VendorsList = ({ vendors }: IVendorsListProps): JSX.Element => (
  <div>
    {vendors?.map((vendor, index) => (
      <Card
        key={index.toString()}
        restaurantTitle={vendor.data.title}
        coverImage={vendor.data.backgroundImage}
        deliveryPrice={vendor.data.deliveryFee}
        description={vendor.data.description}
        numOfVotes={vendor.data.countOfUserImages}
        rating={vendor.data.rate}
        restaurantLogo={vendor.data.defLogo}
      />
    ))}
  </div>
);

export default VendorsList;
