import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/styles.module.css';
import bannerImage from '@/assets/about_banner.png'; // 회사 개요의 배너 이미지 변경을 원하시면 해당 경로의 동일 파일명의 이미지를 변경해 주세요.

function BannerImage() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className={styles.bannerImage}>
      <h3 className={styles.title}>소개 이미지</h3>
      <img
        src={bannerImage}
        alt="회사 개요 배너 이미지"
        className={styles.img}
        data-aos="fade-in"
        data-aos-duration="1000"
      />
    </section>
  );
}

export default BannerImage;
