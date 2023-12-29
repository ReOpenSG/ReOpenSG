import React from 'react';
import styles from './About.module.css';
import bannerImage from '@/assets/about_banner.png';

function BannerImage() {
  return (
    <section className={styles.BannerImage}>
      <h3 className={styles.title}>소개 이미지</h3>
      <img
        src={bannerImage}
        alt="About Banner"
        className={styles.img}
        data-aos="fade-in"
        data-aos-duration="1000"
      />
    </section>
  );
}

export default BannerImage;
