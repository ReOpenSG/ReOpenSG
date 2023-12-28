import React from 'react';
import Keywords from './Keywords';
import BgImg from '@/assets/home_universe.png';
import styles from './Home.module.css';

function Universe() {
  return (
    <section className={styles.universe} style={{ backgroundImage: `url('${BgImg}')` }}>
      <div className={styles.titleWrapper}>
        <p className={styles.subtitle} data-aos="fade-up">
          Explore OpenSG
        </p>
        <h3 className={styles.title} data-aos="fade-up" data-aos-delay="100">
          OpenSG의 세계관을 만나 보세요
        </h3>
      </div>
      <Keywords />
    </section>
  );
}

export default Universe;
