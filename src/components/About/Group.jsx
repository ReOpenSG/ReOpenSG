import React from 'react';
import Title from './Common/Title';
import styles from '@/styles/styles.module.css';

function Group() {
  return (
    <section className={styles.group}>
      <Title title="WHAT WE DO" subtitle="Open Solution Group">
        <div className={styles.desc}>
          <p>고객이 원하는 성과창출에</p>
          <p>기여할 수 있는 최고의 파트너</p>
        </div>
      </Title>
    </section>
  );
}

export default Group;
