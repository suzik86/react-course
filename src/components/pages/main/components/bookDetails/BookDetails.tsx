import React from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";
import { IBookDetails } from "../../../../../interfaces";
import { apiService } from "../../../../../services/ApiService";
import { FetchStatusEnum } from "../../../../../enums/FetchStatusEnum";

interface BookDetailsProps {}

const BookDetails: React.FC<BookDetailsProps> = () => {
  const params = useParams<{ bookId: string }>();

  const [bookDetails, setBookDetails] = React.useState<IBookDetails>(
    {} as IBookDetails,
  );
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatusEnum>(
    FetchStatusEnum.loading,
  );

  React.useEffect(() => {
    const getBookDetails = async () => {
      await apiService
        .getBookById(params?.bookId?.toString() || "")
        .then((data) => {
          setBookDetails(data as IBookDetails);
          setFetchStatus(FetchStatusEnum.done);
        })
        .catch(() => {
          setFetchStatus(FetchStatusEnum.error);
        });
    };
    getBookDetails();
  }, [params?.bookId]);

  if (fetchStatus === "loading") {
    return <div className="loader"></div>;
  }
  if (fetchStatus === "error") {
    return <div>ERR!</div>;
  }

  return (
    <>
      {fetchStatus === "done" && Object.keys(bookDetails).length !== 0 && (
        <div className="book-details">
          <div className="book-title">{bookDetails.book.title}</div>
          <div>
            <p>Published year: {bookDetails.book.publishedYear}</p>
            <p>Number of pages: {bookDetails.book.numberOfPages}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
