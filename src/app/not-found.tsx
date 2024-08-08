import React from "react";
import styles from "../styles/Home.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.not_found}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
