import React, { useEffect, useState } from "react";
import BooksList from "./components/booksList/BooksList";
import { useGetBooksQuery } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet, useSearchParams } from "react-router-dom";
import "./MainPage.css";
import useLocalStorage from "../../../utils/useLocalStorage";
import { ThemeContext } from "../../../ThemeContext";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data, isLoading, isError } = useGetBooksQuery({
    searchTerm: searchTerm,
    page: page,
  });

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(0);
    }
  }, [page]);

  const saveSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setSearchParams({ page: "0" });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main
        className={theme === "light" ? "main light-mode" : "main dark-mode"}
      >
        <button
          className="change-theme-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Change theme
        </button>
        <h1>Book Library</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={saveSearchTerm} />
        <div className="main-block-wrapper">
          <div className="book-list-wrapper">
            <BooksList
              list={data?.books}
              isLoading={isLoading}
              isError={isError}
              totalPages={data?.totalPages}
              currentPage={currentPage}
            />
          </div>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default MainPage;
