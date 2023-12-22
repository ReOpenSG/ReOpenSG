import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/Common/BannerSection.module.css';

function BannerSection({ category, title }) {
  return (
    <section className={styles.titleWrapper}>
      <h2 className={styles.titleText}>
        {title}
      </h2>
      <p className={styles.titleCategory}>{category}</p>
    </section>
  );
}

BannerSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerSection;
