import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function HistorySlide({
  isActive, year, history,
}) {
  const slideRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      slideRef.current.tabIndex = 0;
    } else {
      slideRef.current.tabIndex = -1;
    }
  }, [isActive, slideRef, year]);

  return (
    <div className={`${styles.historySlide} ${isActive ? styles.isActive : styles.isInActive}`}>
      <span className={styles.historySlideTitle}>{year}</span>
      <ul
        ref={slideRef}
        aria-label={`
      ${year}년`}
        className={styles.historySlideDescription}
      >
        {history.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

HistorySlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlide;
