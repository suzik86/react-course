import React from "react";
import "./BooksList.css";
import { IBook } from "../../../../../interfaces";
import Book from "../book/Book";
import { FetchStatusEnum } from "../../../../../enums/FetchStatusEnum";
import Pagination from "../pagination/Pagination";

export interface BooksListProps {
  list: IBook[];
  fetchStatus: FetchStatusEnum;
  totalPages: number;
  currentPage: number;
}
const BooksList: React.FC<BooksListProps> = ({
  list,
  fetchStatus,
  totalPages,
  currentPage,
}) => {
  if (fetchStatus === "loading") {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  if (fetchStatus === "error") {
    return <div>ERR!</div>;
  }

  return (
    <>
      <div>
        {list.length === 0 && <p className="not-found">No matching books</p>}
        <div className="results-block">
          {list.length > 0 &&
            list.map((book, i) => (
              <Book book={book} key={i} currentPage={currentPage} />
            ))}
        </div>
      </div>
      {list.length > 0 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default BooksList;
