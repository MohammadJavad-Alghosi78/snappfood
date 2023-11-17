// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// node_modules
import { ReactNode } from "react";
// redux
import { Providers } from "@/redux/provider";
// styles
import "@/styles/globals.css";

export const metadata = {
  title: "snappfood vendors list",
  description: "snappfood homepage",
};

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout): JSX.Element => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
