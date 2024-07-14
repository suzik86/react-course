import React, { useRef } from "react";
import "./BookDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { IBookDetails } from "../../../../../interfaces";
import { apiService } from "../../../../../services/ApiService";
import { FetchStatusEnum } from "../../../../../enums/FetchStatusEnum";
import useOutsideAlerter from "../../../../../utils/useOutsideAlerter";

interface BookDetailsProps {}

const BookDetails: React.FC<BookDetailsProps> = () => {
  const params = useParams<{ bookId: string }>();

  const [bookDetails, setBookDetails] = React.useState<IBookDetails>(
    {} as IBookDetails,
  );
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatusEnum>(
    FetchStatusEnum.loading,
  );

  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => navigate(-1));

  React.useEffect(() => {
    const getBookDetails = async () => {
      try {
        const data = await apiService.getBookById(
          params?.bookId?.toString() || "",
        );
        setBookDetails(data as IBookDetails);
        setFetchStatus(FetchStatusEnum.done);
      } catch (error) {
        setFetchStatus(FetchStatusEnum.error);
        throw error;
      }
    };
    getBookDetails();
  }, [params?.bookId]);

  if (fetchStatus === "loading") {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  if (fetchStatus === "error") {
    return <div>ERR!</div>;
  }

  return (
    <>
      {fetchStatus === "done" && Object.keys(bookDetails).length !== 0 && (
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
