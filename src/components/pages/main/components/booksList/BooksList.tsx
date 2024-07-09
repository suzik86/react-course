import React from "react";
import "./BooksList.css";
import { IBook } from "../../../../../interfaces";
import Book from "../book/Book";
import { FetchStatusEnum } from "../../../../../enums/FetchStatusEnum";

interface Props {
  list: IBook[];
  fetchStatus: FetchStatusEnum;
}
const BooksList: React.FC<Props> = ({ list, fetchStatus }) => {
  if (fetchStatus === "loading") {
    return <div className="loader"></div>;
  }
  if (fetchStatus === "error") {
    return <div>ERR!</div>;
  }

  return (
    <div>
      {list.length === 0 && <p className="not-found">No matching books</p>}
      {list.length > 0 && list.map((book, i) => <Book book={book} key={i} />)}
    </div>
  );
};

export default BooksList;
