"use client";

// node_modules
import { ReactNode } from "react";
import { Provider } from "react-redux";
// store
import { store } from "./store";

interface IProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProviderProps): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);
