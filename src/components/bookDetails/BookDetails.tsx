import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "@remix-run/react";
import { IBookDetails } from "../../interfaces";
import { selectedItemDetails } from "../../store/selected-item-details/selectedItemDetailsSlice";
import { selectSelectedItemsDetails } from "../../store/selected-item-details/selectors";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import Loader from "../loader/Loader";
import "./BookDetails.css";

const BookDetails: FC<{
  data: IBookDetails;
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(selectedItemDetails(data));
    }
  }, [data, dispatch]);

  const bookDetails = useSelector(selectSelectedItemsDetails);

  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => navigate(-1));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {bookDetails && Object.keys(bookDetails).length && (
        <div className="book-details-wrapper" ref={wrapperRef}>
          <div className="book-details">
            <div className="book-title">{bookDetails.book.title}</div>
            <div>
              <p>
                <label>Published year: </label>
                {bookDetails.book.publishedYear}
              </p>
              <p>Number of pages: {bookDetails.book.numberOfPages}</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => navigate(-1)}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default BookDetails;
