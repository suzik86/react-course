import React, { useContext } from "react";
import { IBook } from "../../../../../interfaces";
import "./Book.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../../ThemeContext";

interface BookProps {
  book: IBook;
  currentPage: number;
}

const Book: React.FC<BookProps> = ({ book, currentPage }) => {
  const theme = useContext(ThemeContext);

  return (
    <Link to={`/book/${book.uid}?page=${currentPage}`} className="book-link">
      <div className="book-card">
        <div
          className={theme === "light" ? "light-book-title" : "dark-book-title"}
        >
          {book.title}
        </div>
      </div>
    </Link>
  );
};

export default Book;
