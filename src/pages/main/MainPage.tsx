import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import BooksList from "../../components/booksList/BooksList";
import Loader from "../../components/loader/Loader";
import SearchBar from "../../components/searchBar/SearchBar";
import { LocalStorageKeysEnum } from "../../enums";
import { useGetBooksQuery } from "../../services/ApiService";
import { currentPageItems } from "../../store/current-page/currentPageSlice";
import useLocalStorage from "../../utils/useLocalStorage";
import "./MainPage.css";

const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;
  const [searchTerm, setSearchTerm] = useLocalStorage(
    LocalStorageKeysEnum.searchTerm,
  );

  const { data, isFetching, isError, error, currentData } = useGetBooksQuery({
    searchTerm,
    page,
  });

  const saveSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setSearchParams({ page: "0" });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.books) {
      dispatch(currentPageItems(data.books));
    }
  }, [data, dispatch]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className={`main ${theme}-mode`}>
        <button className="change-theme-btn" onClick={changeTheme}>
          Change theme
        </button>
        <h1>Book Library</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={saveSearchTerm} />
        <div className="main-block-wrapper">
          <div className="book-list-wrapper">
            {isFetching && <Loader />}
            {isError && <div>{error}</div>}
            {currentData && (
              <BooksList totalPages={data.totalPages} currentPage={page} />
            )}
          </div>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default MainPage;
