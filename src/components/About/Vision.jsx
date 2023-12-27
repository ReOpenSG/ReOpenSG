import React from 'react';

import Title from './Common/Title';
import Card from './Common/Card';
import styles from './About.module.css';

function Vision() {
  return (
    <section className={styles.Vision}>
      <Title title="OUR VISION" subtitle="오픈에스지가 추구하는 길" />
      <ul className={styles.list}>
        <Card
          title="Respect"
          desc="우리는 수평적이고 개방적인 문화를 통해 모든 직원들 의견을 존중, 공유할 수 있는 환경을 조성하며, 협력과 열린 소통을 통해 함께 성장하는 가치를 추구합니다."
          delay="0"
        >
          <span>수평적</span>
          <span>개방적인 문화 지향</span>
        </Card>
        <Card
          title="Creative"
          desc="회사 내 수평적인 문화는 아이디어의 자유로운 흐름을 장려하며, 열린 문으로 모든 직원이 참여하고 협력하여 창의적인 해결책을 찾을 수 있는 공간을 제공합니다."
          delay="300"
        >
          <span>자유로운 아이디어와</span>
          <span>창의적인 해결책 장려</span>
        </Card>
        <Card
          title="Communication"
          desc="우리의 문화는 계층을 넘어서 열린 소통과 협력을 중시하며, 다양한 배경과 경험을 가진 모든 직원들이 조직의 성공에 기여할 수 있는 기회를 제공합니다."
          delay="600"
        >
          <span>계층을 넘어선</span>
          <span>소통과 협력 중시</span>
        </Card>
      </ul>
    </section>
  );
}

export default Vision;
