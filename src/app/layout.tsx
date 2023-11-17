// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import { ReactNode } from "react";
import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
