import React from 'react';
import styles from './Home.module.css';
import BgVideo from '@/assets/home_slogan.mp4';
import Arrow from '@/assets/home_arrow.svg';

function Slogan() {
  return (
    <section className={styles.slogan}>
      <div className="absolute w-full h-screen -bg--openfoundation-black opacity-90 z-10">
        <video muted autoPlay loop playsInline className="object-cover absolute w-full h-screen">
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
        <div className="w-full">
          <div className={styles.scrollWrapper}>
            <div className={styles.mouse}>
              <div className={styles.pointer} />
            </div>
            <p className="text-[18px] my-open-md">scroll down</p>
            <div className={styles.arrow} style={{ backgroundImage: `url('${Arrow}')` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slogan;
