"use client";
import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBookDetails } from "../../interfaces";
import { selectedItemDetails } from "../../store/selected-item-details/selectedItemDetailsSlice";
import { selectSelectedItemsDetails } from "../../store/selected-item-details/selectors";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import styles from "./BookDetails.module.css";
import { useRouter } from "next/navigation";
import ErrorBoundary from "../ErrorBoundary";

type BookDetailsProps = {
  dataByIdFromServer: IBookDetails;
};

const BookDetails: FC<BookDetailsProps> = ({ dataByIdFromServer }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataByIdFromServer) {
      dispatch(selectedItemDetails(dataByIdFromServer));
    }
  }, [dataByIdFromServer, dispatch]);  
  const bookDetails = useSelector(selectSelectedItemsDetails);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => router.back());

  return (
    <ErrorBoundary
      fallback={<p className={styles.error_msg}>Something went wrong</p>}
    >     
      {bookDetails && Object.keys(bookDetails).length && (
        <div className={styles.book_details_wrapper} ref={wrapperRef}>
          <div className={styles.book_details}>
            <div className={styles.book_title}>{bookDetails.book.title}</div>
            <div>
              <p>
                <label>Published year: </label>
                {bookDetails.book.publishedYear}
              </p>
              <p>Number of pages: {bookDetails.book.numberOfPages}</p>
            </div>
          </div>
          <button className={styles.close_btn} onClick={() => router.back()}>
            X
          </button>
        </div>
      )}
    </ErrorBoundary>
  );
};

export default BookDetails;
