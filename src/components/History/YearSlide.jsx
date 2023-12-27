import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/History/History.module.css';
import HistoryCircleIcon from './icons/HistoryCircleIcon';

function YearSlide({ isActive, year }) {
  return (
    <div className={`${styles.yearSlide} ${isActive ? styles.isActive : styles.isInActive}`}>
      <span>{year}</span>
      {isActive
        ? <HistoryCircleIcon width={12} height={12} fill="#fff" stroke="#fff" />
        : <HistoryCircleIcon width={10} height={10} fill="none" stroke="#fff" />}
    </div>
  );
}

YearSlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
};

export default YearSlide;
