import React, { useCallback } from "react";
import BooksList from "./components/booksList/BooksList";
import { IBook } from "../../../interfaces";
import { apiService } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";
import { FetchStatusEnum } from "../../../enums/FetchStatusEnum";

interface Props {}

const MainPage: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>(
    localStorage.getItem("searchTerm") || "",
  );
  const [bookList, setBookList] = React.useState<IBook[]>([]);
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatusEnum>(
    FetchStatusEnum.loading,
  );
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const getBooks = useCallback(async () => {
    await apiService
      .getBooks(searchTerm.trim(), currentPage)
      .then((data) => {
        const { books, totalPages } = data as {
          books: IBook[];
          totalPages: number;
        };
        setBookList(books);
        setFetchStatus(FetchStatusEnum.done);
        setTotalPages(totalPages);
      })
      .catch(() => {
        setFetchStatus(FetchStatusEnum.error);
      });
  }, [searchTerm, currentPage]);

  React.useEffect(() => {
    getBooks();
  }, [getBooks]);

  // React.useEffect(() => {
  //   getBooks();
  // }, []);

  // const getBooks = async () => {
  //   try {
  //     const list = await apiService.getBooks(searchTerm.trim());
  //     setBookList(list);
  //     setFetchStatus(FetchStatusEnum.done);
  //   } catch {
  //     setFetchStatus(FetchStatusEnum.error);
  //   }
  // };

  const saveSearchTerm = (searchTerm: string) => {
    localStorage.setItem("searchTerm", searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <main className="main">
      <h1>Book Library</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={saveSearchTerm}
        getBooks={getBooks}
      />
      <BooksList
        list={bookList}
        fetchStatus={fetchStatus}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default MainPage;
