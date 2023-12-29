import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '@/styles/styles.module.css';

function ListButtons({
  currentPage,
  pageCount,
  handleFirstPage,
  handlePrevPage,
  handlePageChange,
  handleNextPage,
  handleLastPage,
}) {
  return (
    <div className={styles.listButtons}>
      <button type="button" onClick={handleFirstPage} className="">
        &#8810;
      </button>

      <button type="button" onClick={handlePrevPage} className="-rotate-90">
        &#8896;
      </button>

      {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`${styles.pageNum} ${currentPage === pageNumber ? styles.currentPage : ''}`}
        >
          {pageNumber}
        </button>
      ))}

      <button type="button" onClick={handleNextPage} className="-rotate-90">
        &#8897;
      </button>

      <button type="button" onClick={handleLastPage}>
        &#8811;
      </button>
    </div>
  );
}
export default ListButtons;
ListButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  handleFirstPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handleLastPage: PropTypes.func.isRequired,
};
