import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../services/ApiService";
import { selectedItemDetails } from "../../store/slices/selectedItemDetailsSlice";
import { RootState } from "../../store/store";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import Loader from "../loader/Loader";
import "./BookDetails.css";

const BookDetails = () => {
  const params = useParams<{ bookId: string }>();

  const { data, isLoading, isError, isSuccess } = useGetBookByIdQuery(
    params?.bookId,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(selectedItemDetails(data));
    }
  }, [data, dispatch]);

  const bookDetails = useSelector(
    (state: RootState) => state.selectedItemDetails.details,
  );

  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => navigate(-1));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>ERR!</div>;
  }

  return (
    <>
      {isSuccess && Object.keys(bookDetails).length && (
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
