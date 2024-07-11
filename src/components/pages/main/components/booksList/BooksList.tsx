import React from "react";
import "./BooksList.css";
import { IBook } from "../../../../../interfaces";
import Book from "../book/Book";
import { FetchStatusEnum } from "../../../../../enums/FetchStatusEnum";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";

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
    return <div className="loader"></div>;
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
              <Link to={`/book/${book.uid}`} key={i} className="book-link">
                <Book book={book} key={i} />
              </Link>
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
