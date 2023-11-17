// types
import { ITypographyProps } from "./types";
// styles
import "./typography.scss";

const Typography = (props: ITypographyProps): JSX.Element => {
  const { tag: Tag = "span", children, color, className } = props;

  return (
    <Tag style={{ color }} className={className}>
      {children}
    </Tag>
  );
};

export default Typography;
