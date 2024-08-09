import React from "react";
import { getSelectedMessage } from "../../store/selected-books/helpers";
import downloadBooks from "../../utils/downloadBooks";
import { useDispatch } from "react-redux";
import { IBook } from "../../interfaces";
import { unselectAllBooks } from "../../store/selected-books/selectedBooksSlice";
import "./SelectedBooksButtons.css";

interface SelectedBooksButtonsProps {
  selectedBooks: IBook[];
}

const SelectedBooksButtons: React.FC<SelectedBooksButtonsProps> = ({
  selectedBooks,
}) => {
  const dispatch = useDispatch();
  const removeSelectedBooks = () => {
    dispatch(unselectAllBooks());
  };

  return (
    <div className="selected-books-block">
      {getSelectedMessage(selectedBooks.length)}
      <button className="remove-selected" onClick={removeSelectedBooks}>
        Unselect all
      </button>
      <button onClick={() => downloadBooks(selectedBooks)}>Download</button>
    </div>
  );
};

export default SelectedBooksButtons;
