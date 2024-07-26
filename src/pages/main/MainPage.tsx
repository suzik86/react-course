import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import BooksList from "../../components/booksList/BooksList";
import Loader from "../../components/loader/Loader";
import SearchBar from "../../components/searchBar/SearchBar";
import { LocalStorageKeysEnum } from "../../enums";
import { useGetBooksQuery } from "../../services/ApiService";
import { currentPageItems } from "../../store/slices/currentPageSlice";
import useLocalStorage from "../../utils/useLocalStorage";
import "./MainPage.css";

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

  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.books) {
      dispatch(currentPageItems(data.books));
    }
  }, [data, dispatch, page]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main
        className={theme === "light" ? "main light-mode" : "main dark-mode"}
      >
        <button className="change-theme-btn" onClick={changeTheme}>
          Change theme
        </button>
        <h1>Book Library</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={saveSearchTerm} />
        <div className="main-block-wrapper">
          <div className="book-list-wrapper">
            {isLoading && <Loader />}
            {isError && <div>ERR!</div>}
            {data && data.books && (
              <BooksList totalPages={data?.totalPages} currentPage={page} />
            )}
          </div>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default MainPage;
