import React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const disablePrevious = currentPage === 0;
  const disableNext = currentPage === totalPages - 1;

  const currentUrl = window.location.pathname;

  return (
    <div className="pagination">
      <Link to={`${currentUrl}?page=${currentPage - 1}`}>
        <button className="previous-button" disabled={disablePrevious}>
          Previous
        </button>
      </Link>
      <span className="current-page-block">
        <span className="current-page">{currentPage + 1}</span> of {totalPages}
      </span>
      <Link
        to={`${currentUrl}?page=${currentPage + 1}`}
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
