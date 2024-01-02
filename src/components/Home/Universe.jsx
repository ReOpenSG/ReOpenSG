import React from 'react';
import Keywords from './Keywords';
import BgImg from '@/assets/home_universe.png';
import styles from '@/styles/styles.module.css';
import { t } from 'i18next';

function Universe() {
  return (
    <section className={styles.universe} style={{ backgroundImage: `url('${BgImg}')` }}>
      <div className={styles.titleWrapper}>
        <p className={styles.subtitle} data-aos="fade-up">
          Explore OpenSG
        </p>
        <h3 className={styles.title} data-aos="fade-up" data-aos-delay="100">
          {t('home:universe.title')}
        </h3>
      </div>
      <Keywords />
    </section>
  );
}

export default Universe;
