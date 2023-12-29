import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function Title({ title, subtitle, children }) {
  return (
    <div className={styles.commonTitle}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.subTitleContainer}>
        <p className={styles.subTitle}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Title.defaultProps = {
  children: null,
};

export default Title;
