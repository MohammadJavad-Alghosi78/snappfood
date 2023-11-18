// node_modules
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type DefaultHTMLTextsTypes = HTMLAttributes<
  HTMLSpanElement | HTMLHeadElement | HTMLDivElement
>;

export interface ITypographyProps extends DefaultHTMLTextsTypes {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  color?: CSSProperties["color"];
  className?: string;
}
