"use client";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BooksList from "../components/booksList/BooksList";
import SearchBar from "../components/searchBar/SearchBar";
import { LocalStorageKeysEnum } from "../enums";
import { IResponse } from "../interfaces";
import { currentPageItems } from "../store/current-page/currentPageSlice";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../ThemeContext";
import useLocalStorage from "../utils/useLocalStorage";
import ErrorBoundary from "../components/ErrorBoundary";

interface HomeProps {
  children?: ReactNode;
  dataFromServer?: IResponse;
}
const HomePage: React.FC<HomeProps> = ({ children, dataFromServer }) => {
  const [theme, setTheme] = useState("light");
  
  const searchParams = useSearchParams();
  const page = Number(searchParams?.get("page")) || 0;

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
            <div className={styles.book_list_wrapper}>             
              {dataFromServer && (                
                <BooksList
                  totalPages={dataFromServer?.page?.totalPages || 0}
                  currentPage={page}
                  searchTerm={searchTerm}
                />            
              )}
            </div>
            {children}
          </div>
        </main>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default HomePage;
