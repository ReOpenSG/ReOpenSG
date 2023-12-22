import React from 'react';
import Keywords from './Keywords';
import BgImg from '@/assets/home_universe.png';
import styles from './Home.module.css';

function Universe() {
  return (
    <section className={styles.universe} style={{ backgroundImage: `url('${BgImg}')` }}>
      <div className={styles.titleWrapper}>
        <p className={styles.subtitle}>Explore OpenSG</p>
        <h3 className={styles.title}>OpenSG의 세계관을 만나보세요</h3>
      </div>
      <Keywords />
    </section>
  );
}

export default Universe;
