import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Solutions.module.css';
import ImagArray from './importImageSolutions';

function SoultionBanner({ currentLocation, prevLocation }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className={styles.SolutionBanner}>
      <div className={styles.wrapper}>
        <p className={styles.nav}>
          {prevLocation}
          &nbsp; &gt; &nbsp;
          {currentLocation}
        </p>
        <div className={styles.banner} data-aos="fade-up" data-aos-duration="2000">
          <p className={styles.desc}>물류 자동화의 첫 걸음</p>
          <h3 className={styles.solution}>
            Open
            {currentLocation}
            &reg;
          </h3>
          <div className="tablet:hidden mobile:hidden absolute overflow-hidden right-[200px] top-1/3">
            <img src={ImagArray[currentLocation]} alt="배너 이미지" />
          </div>
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
