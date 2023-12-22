import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/Common/BannerSection.module.css';

function BannerSection({ category, title }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.titleCategory}>{category}</h2>
      <h3 className={styles.titleText}>
        {title}
      </h3>
    </div>
  );
}

BannerSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerSection;
