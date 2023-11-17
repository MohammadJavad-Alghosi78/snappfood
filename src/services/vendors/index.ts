// config
import { http } from "@/config";
// types
import { GetVendors } from "./types";

class Services {
  static getVendords: GetVendors = (params) =>
    http.get("/mobile/v3/restaurant/vendors-list", { params });
}

export default Services;
