import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function SoultionBanner({ currentLocation, prevLocation }) {
  return (
    <section className={styles.SolutionBanner}>
      <div className={styles.wrapper}>
        <p className={styles.nav}>
          {prevLocation}
          &nbsp; &gt; &nbsp;
          {currentLocation}
        </p>
        <div className={styles.banner}>
          <p className={styles.desc}>물류 자동화의 첫 걸음</p>
          <h3 className={styles.solution}>
            Open
            {currentLocation}
            &reg;
          </h3>
        </div>
      </div>
    </section>
  );
}

SoultionBanner.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  prevLocation: PropTypes.string.isRequired,
};

export default SoultionBanner;
