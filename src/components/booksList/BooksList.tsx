import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../interfaces";
import { selectCurrentPageItems } from "../../store/current-page/selectors";
import {
  selectBook,
  unselectAllBooks,
  unselectBook,
} from "../../store/selected-books/selectedBooksSlice";
import { selectSelectedBooks } from "../../store/selected-books/selectors";
import downloadBooks from "../../utils/downloadBooks";
import Book from "../book/Book";
import Pagination from "../pagination/Pagination";
import "./BooksList.css";

type Props = {
  totalPages: number;
  currentPage: number;
};

const BooksList: FC<Props> = ({ totalPages, currentPage }) => {
  const list = useSelector(selectCurrentPageItems);
  const selectedBooksList = useSelector(selectSelectedBooks);

  const dispatch = useDispatch();

  const handleClick = (book: IBook, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(selectBook(book));
    } else {
      dispatch(unselectBook(book));
    }
  };

  const removeSelectedBooks = () => {
    dispatch(unselectAllBooks());
  };

  return (
    <>
      <div>
        {!list.length && <p className="not-found">No matching books</p>}
        {Boolean(selectedBooksList.length) && (
          <div className="selected-books-block">
            {selectedBooksList.length === 1 && (
              <p>{selectedBooksList.length} book is selected</p>
            )}
            {selectedBooksList.length > 1 && (
              <p>{selectedBooksList.length} books are selected</p>
            )}
            <button className="remove-selected" onClick={removeSelectedBooks}>
              Unselect all
            </button>
            <button onClick={() => downloadBooks(selectedBooksList)}>
              Download
            </button>
          </div>
        )}
        <div className="results-block">
          {Boolean(list.length) &&
            list.map((book, i) => (
              <div className="book-card-wrapper" key={i}>
                <input
                  checked={selectedBooksList.includes(book)}
                  type="checkbox"
                  className="book-checkbox"
                  onChange={(e) => handleClick(book, e)}
                />
                <Book book={book} currentPage={currentPage} />
              </div>
            ))}
        </div>
      </div>
      {Boolean(list.length) && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default BooksList;
