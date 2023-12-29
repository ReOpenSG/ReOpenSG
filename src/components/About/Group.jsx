import React from 'react';
import Title from './Common/Title';
import styles from './About.module.css';

function Group() {
  return (
    <section className={styles.Group}>
      <Title title="WHAT WE DO" subtitle="Open Solution Group">
        <p className={styles.desc}>
          <span>고객이 원하는 성과창출에</span>
          <span>기여할 수 있는 최고의 파트너</span>
        </p>
      </Title>
    </section>
  );
}

export default Group;
