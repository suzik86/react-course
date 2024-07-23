import { useRef } from "react";
import "./BookDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import useOutsideAlerter from "../../../../../utils/useOutsideAlerter";
import { useGetBookByIdQuery } from "../../../../../services/ApiService";

const BookDetails = () => {
  const params = useParams<{ bookId: string }>();

  const { data, isLoading, isError, isSuccess } = useGetBookByIdQuery(
    params?.bookId,
  );
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => navigate(-1));

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
      {isSuccess && Object.keys(data).length && (
        <div className="book-details-wrapper" ref={wrapperRef}>
          <div className="book-details">
            <div className="book-title">{data.book.title}</div>
            <div>
              <p>
                <label>Published year: </label>
                {data.book.publishedYear}
              </p>
              <p>Number of pages: {data.book.numberOfPages}</p>
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
