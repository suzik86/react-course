import React from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  const disablePrevious = currentPage === 0;
  const disableNext = currentPage === totalPages - 1;

  return (
    <div className="pagination">
      <button
        className="previous-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disablePrevious}
      >
        Previous
      </button>
      <span className="current-page-block">
        <span className="current-page">{currentPage + 1}</span> of {totalPages}
      </span>
      <button
        className="next-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
