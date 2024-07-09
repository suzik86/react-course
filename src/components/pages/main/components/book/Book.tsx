import React from "react";
import { IBook } from "../../../../../interfaces";
import "./Book.css";

interface Props {
  book: IBook;
}
const Book: React.FC<Props> = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-title">{book.title}</div>
      <div>
        <p>Published year: {book.publishedYear}</p>
        <p>Number of pages: {book.numberOfPages}</p>
      </div>
    </div>
  );
};

export default Book;
