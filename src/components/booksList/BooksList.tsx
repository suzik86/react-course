import { FC } from "react";
import "./BooksList.css";
import { IBook } from "../../interfaces";
import Book from "../book/Book";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { unselectAllBooks } from "../../store/slices/selectedBooksSlice";
import {
  selectBook,
  unselectBook,
} from "../../store/slices/selectedBooksSlice";
import { RootState } from "../../store/store";
import downloadBooks from "../../utils/downloadBooks";

type Props = {
  totalPages: number;
  currentPage: number;
};

const BooksList: FC<Props> = ({ totalPages, currentPage }) => {
  const list = useSelector(
    (state: RootState) => state.currentPageItems.currentPageItems,
  );
  const selectedBooks = useSelector(
    (state: RootState) => state.selectedBooks.selectedBooks,
  );

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
        {Boolean(selectedBooks.length) && (
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
            <button onClick={() => downloadBooks(selectedBooks)}>
              Download
            </button>
          </div>
        )}
        <div className="results-block">
          {Boolean(list.length) &&
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
      {Boolean(list.length) && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default BooksList;
