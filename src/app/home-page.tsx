"use client";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import { LocalStorageKeysEnum } from "../enums";
import { IResponse } from "../interfaces";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../ThemeContext";
import useLocalStorage from "../utils/useLocalStorage";
import ErrorBoundary from "../components/ErrorBoundary";
import { useDispatch } from "react-redux";
import { currentPageItems } from "../store/current-page/currentPageSlice";

interface HomeProps {
  children?: ReactNode;
  dataFromServer?: IResponse;
}
export default function HomePage ({ children, dataFromServer }: HomeProps) {
  const [theme, setTheme] = useState("light");

  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useLocalStorage(
    LocalStorageKeysEnum.searchTerm,
  ) as [string, React.Dispatch<React.SetStateAction<string>>];

  const saveSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const currentParams = new URLSearchParams(
      Array.from(searchParams?.entries() || []),
    );
    currentParams.set("page", "0");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (dataFromServer?.books) {
      dispatch(currentPageItems(dataFromServer.books));
    }
  }, [dataFromServer, dispatch]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ErrorBoundary
      fallback={<p className={styles.error_msg}>Something went wrong</p>}
    >
      <ThemeContext.Provider value={theme}>
        <main
          className={theme === "light" ? styles.main_light : styles.main_dark}
        >
          <button className={styles.change_theme_btn} onClick={changeTheme}>
            Change theme
          </button>
          <h1>Book Library</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={saveSearchTerm} />
          <div className={styles.main_block_wrapper}>
            {children}
          </div>
        </main>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

