import React from "react";
import "./BooksList.css";
import { IBook } from "../../../../../interfaces";
import Book from "../book/Book";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { unselectAllBooks } from "../../../../../reducers/selectedBooksReducer";
import {
  selectBook,
  unselectBook,
} from "../../../../../reducers/selectedBooksReducer";
import { RootState } from "../../../../../store";

export interface BooksListProps {
  list: IBook[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  isError?: boolean;
}

const BooksList: React.FC<BooksListProps> = ({
  list,
  totalPages,
  currentPage,
  isLoading,
  isError,
}) => {
  const selectedBooks = useSelector(
    (state: RootState) => state.selectedBooks.selectedBooks,
  );
  const dispatch = useDispatch();

  const handleClick = (book: IBook, e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).checked) {
      dispatch(selectBook(book));
    } else {
      dispatch(unselectBook(book));
    }
  };

  const removeSelectedBooks = () => {
    dispatch(unselectAllBooks());
  };

  const handleDownload = () => {
    const selectedBooksData = selectedBooks.map((book) => ({
      title: book.title,
      publishedYear: book.publishedYear
        ? `was published in ${book.publishedYear}`
        : "",
      numberOfPages: book.numberOfPages ? `${book.numberOfPages} pages` : "",
    }));

    const csvContent =
      "data:text/csv;charset=utf-8," +
      selectedBooksData
        .map((book, i) => {
          const bookInfo = Object.values(book).join(",");
          return `${(i + 1).toString()}. ${bookInfo}`;
        })
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedBooks.length}_books.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <div>ERR!</div>;
  }

  return (
    <>
      <div>
        {list.length === 0 && <p className="not-found">No matching books</p>}
        {selectedBooks.length > 0 && (
          <div className="selected-books-block">
            {selectedBooks.length === 1 && (
              <p>{selectedBooks.length} book is selected</p>
            )}
            {selectedBooks.length > 1 && (
              <p>{selectedBooks.length} books are selected</p>
            )}
            <button className="remove-selected" onClick={removeSelectedBooks}>
              Unselect all
            </button>
            <button onClick={handleDownload}>Download</button>
          </div>
        )}
        <div className="results-block">
          {list.length > 0 &&
            list.map((book, i) => (
              <div className="book-card-wrapper" key={i}>
                <input
                  checked={selectedBooks.includes(book)}
                  type="checkbox"
                  className="book-checkbox"
                  onChange={(e) => handleClick(book, e)}
                />
                <Book book={book} currentPage={currentPage} />
              </div>
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
