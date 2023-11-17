// strings
import { words } from "@/strings";
// components
import Typography from "../Typography";
// styles
import "./loading.scss";

const Loading = () => (
  <div className="loading_wrapper">
    <Typography tag="div">{words.loading}</Typography>
  </div>
);

export default Loading;
