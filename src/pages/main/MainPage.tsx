import { Outlet, useSearchParams } from "@remix-run/react";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../ThemeContext";
import BooksList from "../../components/booksList/BooksList";
import Loader from "../../components/loader/Loader";
import SearchBar from "../../components/searchBar/SearchBar";
import { currentPageItems } from "../../store/current-page/currentPageSlice";
import "./MainPage.css";

import { IResponse } from "../../interfaces";

const MainPage: FC<{
  data: IResponse;
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;
  const [searchTerm, setSearchTerm] = useState("");

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
            {isLoading && <Loader />}
            {!isLoading && (
              <BooksList
                totalPages={data.page.totalPages || 0}
                currentPage={page}
                list={data.books}
              />
            )}
          </div>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default MainPage;
