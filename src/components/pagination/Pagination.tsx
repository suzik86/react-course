import Link from "next/link";
import { FC } from "react";
import styles from "./Pagination.module.css";

type Props = {
  currentPage: number;
  totalPages: number;
  searchTerm: string;
};

const Pagination: FC<Props> = ({ currentPage, totalPages, searchTerm }) => {
  const disablePrevious = !currentPage;
  const disableNext = currentPage === totalPages - 1;

  const currentUrl = window.location.pathname;

  return (
    <div className={styles.pagination}>
      <Link
        href={`${currentUrl}?searchTerm=${searchTerm}&page=${currentPage - 1}`}
        className={styles.previous_button_link}
      >
        <button className={styles.previous_button} disabled={disablePrevious}>
          Previous
        </button>
      </Link>
      <span className={styles.current_page_block}>
        <span className={styles.current_page}>{currentPage + 1}</span> of{" "}
        {totalPages}
      </span>
      <Link
        href={`${currentUrl}?searchTerm=${searchTerm}&page=${currentPage + 1}`}
        className={styles.next_button_link}
      >
        <button className={styles.next_button} disabled={disableNext}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
