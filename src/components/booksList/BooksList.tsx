"use client";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../interfaces";
import {
  selectBook,
  unselectBook,
} from "../../store/selected-books/selectedBooksSlice";
import Book from "../book/Book";
import Pagination from "../pagination/Pagination";
import SelectedBooksButtons from "../selectedBooksButtons/SelectedBooksButtons";
import styles from "./BooksList.module.css";
import { selectSelectedBooks } from "../../store/selected-books/selectors";

type BooksListProps = {
  totalPages: number;
  currentPage: number;
  searchTerm: string;
  list: IBook[];
};

const BooksList: FC<BooksListProps> = ({
  totalPages,
  currentPage,
  searchTerm,
  list
}) => {
  const selectedBooksList = useSelector(selectSelectedBooks);
  const dispatch = useDispatch();

  const handleClick = (book: IBook, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(selectBook(book));
    } else {
      dispatch(unselectBook(book));
    }
  };

  return (
      <div className={styles.container}> 
        {Boolean(selectedBooksList.length) && (
          <SelectedBooksButtons selectedBooks={selectedBooksList} />
        )}
        {!list.length && <p className={styles.not_found}>No matching books</p>}
        <div className={styles.results_block}>
          {Boolean(list.length) &&
            list.map((book, i) => (
              <div className={styles.book_card_wrapper} key={i}>
                <input
                  checked={selectedBooksList.includes(book)}
                  type="checkbox"
                  className={styles.book_checkbox}
                  onChange={(e) => handleClick(book, e)}
                />
                <Book
                  book={book}
                  currentPage={currentPage}
                  searchTerm={searchTerm}
                />
              </div>
            ))}
        </div>
        {Boolean(list.length) && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchTerm={searchTerm}
        />
      )}
      </div>
  );
};

export default BooksList;
