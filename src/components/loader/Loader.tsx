import { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
