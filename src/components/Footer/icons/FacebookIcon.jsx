import React from 'react';
import styles from '@/components/Footer/Footer.module.css';

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconStyle}
    >
      <circle cx="40" cy="40" r="40" className="-fill--open-gray-500" />
      <path
        d="M58 26.5504V15.0504C34.8 9.85043 29.3333 25.2171 29.5 33.5504V39.5504H22V51.5504H30V78.714C34.5 80 41 80.5 44.5 79.75V51.5504H55.5L57.5 39.5504H44.5V33.5504C44.5 25.5504 53.5 25.5504 58 26.5504Z"
        className="-fill--openfoundation-secondary"
      />
    </svg>
  );
}

export default FacebookIcon;
