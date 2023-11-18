// strings
import { words } from "@/strings";
// components
import Typography from "../Typography";
// styles
import styles from "./loading.module.scss";

const Loading = () => (
  <div className={styles.loading_wrapper}>
    <Typography tag="div">{words.loading}</Typography>
  </div>
);

export default Loading;
