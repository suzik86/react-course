import React from "react";
import { IBook } from "../../../../../interfaces";
import "./Book.css";
import { Link } from "react-router-dom";

interface BookProps {
  book: IBook;
  currentPage: number;
}

const Book: React.FC<BookProps> = ({ book, currentPage }) => {
  return (
    <Link to={`/book/${book.uid}?page=${currentPage}`} className="book-link">
      <div className="book-card">
        <div className="book-title">{book.title}</div>
      </div>
    </Link>
  );
};

export default Book;
