import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styles from '@/components/History/History.module.css';

function HistorySlide({
  year, history,
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <div tabIndex={0} ref={ref} className={`${styles.historySlide} ${inView ? styles.isActive : styles.isInActive}`}>
      <span className={styles.historySlideTitle}>{year}</span>
      <ul className={styles.historySlideDescription}>
        {history.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

HistorySlide.propTypes = {
  year: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlide;
