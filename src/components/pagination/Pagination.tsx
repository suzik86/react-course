import { Link, useSearchParams } from "@remix-run/react";
import { FC } from "react";
import "./Pagination.css";

type Props = {
  currentPage: number;
  totalPages: number;
};

const Pagination: FC<Props> = ({ currentPage, totalPages }) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";

  const disablePrevious = !currentPage;
  const disableNext = currentPage === totalPages - 1;

  return (
    <div className="pagination">
      <Link
        to={`/?searchTerm=${searchTerm}&page=${currentPage - 1}`}
        className="previous-button-link"
      >
        <button className="previous-button" disabled={disablePrevious}>
          Previous
        </button>
      </Link>
      <span className="current-page-block">
        <span className="current-page">{currentPage + 1}</span> of {totalPages}
      </span>
      <Link
        to={`/?searchTerm=${searchTerm}&page=${currentPage + 1}`}
        className="next-button-link"
      >
        <button className="next-button" disabled={disableNext}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
