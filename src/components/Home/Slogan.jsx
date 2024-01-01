import React from 'react';
import styles from '@/styles/styles.module.css';
import BgVideo from '@/assets/home_slogan.mp4';
import Arrow from '@/assets/home_arrow.svg';
import { t } from 'i18next';

function Slogan() {
  return (
    <section className={styles.slogan}>
      <div className="relative z-10 flex h-screen w-full -bg--openfoundation-black opacity-90">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute block h-screen w-full object-cover"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            Open Your Future&nbsp;
            <br />
            with&nbsp;
            <span className={styles.gradient}>OpenSG</span>
          </h3>
          <small className={styles.subtitle}>
            {t('home:slogan.subtitle.0')}
            <br />
            {t('home:slogan.subtitle.1')}
          </small>
        </div>
        <div className="w-full">
          <div className={styles.scrollWrapper}>
            <div className={styles.mouse}>
              <div className={styles.pointer} />
            </div>
            <p className="my-open-md text-[18px]">scroll down</p>
            <div className={styles.arrow} style={{ backgroundImage: `url('${Arrow}')` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slogan;
