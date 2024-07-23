import { useState } from "react";
import BooksList from "./components/booksList/BooksList";
import { useGetBooksQuery } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet, useSearchParams } from "react-router-dom";
import "./MainPage.css";
import useLocalStorage from "../../../utils/useLocalStorage";
import { ThemeContext } from "../../../ThemeContext";
import { LocalStorageKeysEnum } from "../../../enums";

const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;
  const [searchTerm, setSearchTerm] = useLocalStorage(
    LocalStorageKeysEnum.searchTerm,
  );

  const { data, isLoading, isError } = useGetBooksQuery({
    searchTerm: searchTerm,
    page: page,
  });

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
              currentPage={page}
            />
          </div>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default MainPage;
