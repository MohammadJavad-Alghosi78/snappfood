import { IFinalResult } from "@/services/vendors/types";

export interface IVendorsState {
  loading: boolean;
  vendors: Array<IFinalResult>;
  errorMessage: string;
}
