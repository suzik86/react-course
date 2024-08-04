// Disable rule react-refresh/only-export-components
/* eslint-disable react-refresh/only-export-components */

import type { AppProps } from "next/app";
import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { wrapper } from "../store/store";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../ThemeContext";
import "../styles/globals.css";

export function App({ Component, pageProps }: AppProps) {
  const [theme] = useState("light");

  return (
    <ErrorBoundary
      fallback={<p className={styles.error_msg}>Something went wrong</p>}
    >
      <ThemeContext.Provider value={theme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

const reduxWrapper = wrapper.withRedux(App);
export default reduxWrapper;
