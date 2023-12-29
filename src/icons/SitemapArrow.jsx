import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function SitemapArrow({ down }) {
  return (
    <svg className={down ? styles.arrowDown : styles.arrowDefault} width="22" height="12" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector 421" d="M25 14L13 2L0.999999 14" stroke="white" strokeWidth="2" />
    </svg>

  );
}

SitemapArrow.propTypes = {
  down: PropTypes.bool.isRequired,
};

export default SitemapArrow;
