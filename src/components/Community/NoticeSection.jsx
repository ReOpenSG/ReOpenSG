import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import NoticeList from './NoticeList';
import ListButtons from './ListButtons';
import styles from './Community.module.css';

function NoticeSection({ sortedNotices }) {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 6;

  const currentNotices = sortedNotices?.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage,
  );

  const pageCount = Math.ceil(sortedNotices.length / noticesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageCount);
  };

  const ListButtonsProps = {
    currentPage,
    pageCount: Math.ceil(sortedNotices.length / noticesPerPage),
    handleFirstPage,
    handlePrevPage,
    handlePageChange,
    handleNextPage,
    handleLastPage,
  };
  return (
    <section className={styles.NoticeWrapper}>
      <span className="sr-only">커뮤니티 리스트</span>
      <p className={styles.pageCount}>
        Total: {sortedNotices?.length} [{currentPage} / {ListButtonsProps.pageCount}]
      </p>

      <NoticeList notices={sortedNotices} currentNotices={currentNotices} />

      <ListButtons {...ListButtonsProps} />
    </section>
  );
}
export default NoticeSection;

NoticeSection.propTypes = {
  sortedNotices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.shape({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
};
