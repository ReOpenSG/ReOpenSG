import React from 'react';
import Palette from './Common/Palette';
import styles from './About.module.css';
import ciImage from '@/assets/about_ci.png';

function Ci() {
  return (
    <section className={styles.Ci}>
      <div className={styles.ciWrapper}>
        <h3 className={styles.title}>CI</h3>
        <p className={styles.desc}>
          OpenSG의 ‘SG’는 ‘Solution Group’의 약자를 상징합니다.
          <br />
          상호 간의 신뢰와 협업을 상징하는 블루 컬러를 메인으로
          <br />
          로고 하단의 회색 그라디언트는 구성원 모두가 조직의 성공이라는 지향점을 향한다는 의미를
          담고 있습니다.
        </p>
        <ul className={styles.list}>
          <Palette
            rgb="R 6 / G 64 / B 108"
            cmyk="C 98 / M 82 / Y 41 / K 6"
            hex="#06406C"
            roundedLeft
          />
          <Palette rgb="R 76 / G 140 / B 200" cmyk="C 70 / M 36 / Y 2 / K" hex="#4C8CC8" />
          <Palette
            rgb="R 201 / G 202 / B 203"
            cmyk="C 0 / M 0 / Y 0 / K 30"
            hex="#C9CACB"
            roundedRight
          />
        </ul>
      </div>
      <div className={styles.imgWrapper}>
        <img src={ciImage} alt="CI 로고" className={styles.ciImg} />
      </div>
    </section>
  );
}

export default Ci;
