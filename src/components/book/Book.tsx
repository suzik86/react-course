import { Link, useSearchParams } from "@remix-run/react";
import { FC, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { IBook } from "../../interfaces";
import "./Book.css";

type Props = {
  book: IBook;
  currentPage: number;
};

const Book: FC<Props> = ({ book, currentPage }) => {
  const theme = useContext(ThemeContext);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  return (
    <Link
      to={`/book/${book.uid}?searchTerm=${searchTerm}&page=${currentPage}`}
      className="book-link"
    >
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
