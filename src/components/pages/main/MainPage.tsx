import React, { useCallback, useEffect } from "react";
import BooksList from "./components/booksList/BooksList";
import { IBook } from "../../../interfaces";
import { apiService } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";
import { FetchStatusEnum } from "../../../enums/FetchStatusEnum";
import { Outlet, useSearchParams } from "react-router-dom";
import "./MainPage.css";
import useLocalStorage from "../../../utils/useLocalStorage";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm");

  const [bookList, setBookList] = React.useState<IBook[]>([]);
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatusEnum>(
    FetchStatusEnum.loading,
  );
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(0);
    }
  }, [page]);

  const getBooks = useCallback(async () => {
    setFetchStatus(FetchStatusEnum.loading);
    try {
      const data = await apiService.getBooks(searchTerm.trim(), currentPage);
      const { books, totalPages } = data as {
        books: IBook[];
        totalPages: number;
      };
      setBookList(books);
      setFetchStatus(FetchStatusEnum.done);
      setTotalPages(totalPages);
    } catch (error) {
      setFetchStatus(FetchStatusEnum.error);
      throw error;
    }
  }, [searchTerm, currentPage]);

  React.useEffect(() => {
    getBooks();
  }, [getBooks]);

  const saveSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setSearchParams({ page: "0" });
  };

  return (
    <main className="main">
      <h1>Book Library</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={saveSearchTerm}
        getBooks={getBooks}
      />
      <div className="main-block-wrapper">
        <div className="book-list-wrapper">
          <BooksList
            list={bookList}
            fetchStatus={fetchStatus}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default MainPage;
