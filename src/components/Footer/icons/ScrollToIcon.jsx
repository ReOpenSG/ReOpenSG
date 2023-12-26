import React from 'react';
import styles from '@/components/Footer/Footer.module.css';

function ScrollToIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconStyle}
    >
      <circle cx="40" cy="40" r="40" className="-fill--open-gray-500" />
      <path
        d="M39.999 24L53.8554 48H26.1426L39.999 24Z"
        className="-fill--openfoundation-secondary"
      />
    </svg>
  );
}

export default ScrollToIcon;
