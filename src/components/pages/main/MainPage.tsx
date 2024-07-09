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

  const getBooks = useCallback(async () => {
    await apiService
      .getBooks(searchTerm.trim())
      .then((list) => {
        setBookList(list);
        setFetchStatus(FetchStatusEnum.done);
      })
      .catch(() => {
        setFetchStatus(FetchStatusEnum.error);
      });
  }, [searchTerm]);

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
      <BooksList list={bookList} fetchStatus={fetchStatus} />
    </main>
  );
};

export default MainPage;
