"use client";
import { FC, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../ThemeContext";
import { IBook } from "../../interfaces";
import styles from "./Book.module.css";

type Props = {
  book: IBook;
  currentPage: number;
  searchTerm: string;
};

const Book: FC<Props> = ({ book, currentPage, searchTerm }) => {
  const theme = useContext(ThemeContext);

  return (
    <Link
      href={`/book/${book.uid}?searchTerm=${searchTerm}&page=${currentPage}`}
      className={styles.book_link}
    >
      <div className={styles.book_card}>
        <div
          className={
            theme === "light" ? styles.light_book_title : styles.dark_book_title
          }
        >
          {book.title}
        </div>
      </div>
    </Link>
  );
};

export default Book;
