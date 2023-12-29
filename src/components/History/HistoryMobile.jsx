import React from 'react';
import PropTypes from 'prop-types';
import HistoryMobileSlide from './HistoryMobileSlide';
import styles from '@/styles/styles.module.css'

function HistoryMobile({ historyData }) {
  const historyDataSorted = Object.entries(historyData).toSorted((a, b) => b[0] - a[0]);
  return (
    <div className={styles.historyMobileWrapper}>
      <section className={styles.historyMobileSection}>
        {historyDataSorted.map(([key, value]) => (
          <HistoryMobileSlide
            year={key}
            history={value}
            key={key}
          />
        ))}
      </section>
    </div>
  );
}

HistoryMobile.propTypes = {
  historyData: PropTypes.object.isRequired,
};

export default HistoryMobile;
