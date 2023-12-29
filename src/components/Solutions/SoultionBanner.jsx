import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/styles.module.css';
import ImagArray from './solutionsBannerImage.js'; // 솔루션 배너 아이콘 이미지 변경을 원하시면 현재 파일과 동일한 위치의 "./solutionsBannerImage.js"로 이동 후

function SoultionBanner({ currentLocation, prevLocation }) {
  const [isSimulator, setIsSimulator] = useState(false);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    setIsSimulator(currentLocation.split(' ')[1] === 'Simulator');
  }, [currentLocation]);

  return (
    <section className={styles.solutionBanner}>
      <h3 className={styles.sectionTitle}>솔루션 배너 이미지</h3>
      <div className={styles.navBannerContainer}>
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
          <p className={styles.solution}>
            <span>Open</span>
            <span>
              {currentLocation}
              &reg;
            </span>
          </p>
          <div className={styles.imageContainer}>
            <img src={ImagArray[currentLocation]} alt="솔루션 배너 이미지" />
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
