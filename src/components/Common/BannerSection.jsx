import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function BannerSection({ category, title }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className={styles.bannerSection} data-aos="fade-up" data-aos-duration="1200">
      <h2 className={styles.titleText}>{title}</h2>
      <p className={styles.titleCategory}>{category}</p>
    </section>
  );
}

BannerSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerSection;
