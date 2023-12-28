import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Solutions.module.css';
import ImagArray from './importImageSolutions';

function SoultionBanner({ currentLocation, prevLocation }) {
  const [isSimulator, setIsSimulator] = useState(false);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    setIsSimulator(currentLocation.split(' ')[1] === 'Simulator');
  }, [currentLocation]);

  return (
    <section className={styles.SolutionBanner}>
      <div className={styles.wrapper}>
        <p className={styles.nav}>
          {prevLocation}
          &nbsp; &gt; &nbsp;
          {currentLocation}
        </p>
        <div className={styles.banner} data-aos="fade-up" data-aos-duration="2000">
          {isSimulator && (
            <div className={styles.simulator}>
              <span>Simulator</span>
            </div>
          )}

          <p className={styles.desc}>물류 자동화의 첫 걸음</p>
          <h3 className={styles.solution}>
            <span>Open</span>
            <span>
              {currentLocation}
              &reg;
            </span>
          </h3>
          <div className="mobile:hidden absolute overflow-hidden desktop:right-[100px] desktop:w-[320px] tablet:right-[20px] tablet:w-[280px]">
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
