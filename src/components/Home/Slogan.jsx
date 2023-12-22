import React from 'react';
import styles from './Home.module.css';
import BgVideo from '@/assets/home_slogan.mp4';

function Slogan() {
  return (
    <section className={styles.slogan}>
      <video muted autoPlay loop className="object-cover absolute w-full h-screen">
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          OPEN Your Future&nbsp;
          <br />
          with&nbsp;
          <span className={styles.gradient}>OpenSG</span>
        </h3>
        <small className={styles.subtitle}>
          고객에게 열려있는 기업, 고객의 미래를 여는 기업
          <br />
          OpenSG가 고객과 함께 미래로 가는 길을 엽니다
        </small>
      </div>
    </section>
  );
}

export default Slogan;
