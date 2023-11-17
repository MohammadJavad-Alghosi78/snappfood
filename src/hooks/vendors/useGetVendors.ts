// node_modules
import { useEffect, useRef, useState } from "react";
// constants
import { defaultParams } from "@/constants";
// services
import { VendorServices } from "@/services";
import { IFinalResult } from "@/services/vendors/types";

const useGetVendors = (page: number) => {
  const [vendors, setVendors] = useState<Array<IFinalResult>>([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    (async () => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        try {
          const {
            data: {
              data: { finalResult },
            },
          } = await VendorServices.getVendords({
            ...defaultParams,
            page,
          });
          setVendors(finalResult);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [page]);

  return { vendors };
};

export default useGetVendors;
