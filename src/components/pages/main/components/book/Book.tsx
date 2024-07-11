import React from "react";
import { IBook } from "../../../../../interfaces";
import "./Book.css";

interface BookProps {
  book: IBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-title">{book.title}</div>
    </div>
  );
};

export default Book;
