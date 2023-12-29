import React from 'react';
import styles from '@/styles/styles.module.css';

function YoutubeIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconStyle}
    >
      <circle
        cx="40"
        cy="40"
        r="40"
        transform="matrix(1 0 0 -1 0 80)"
        className="-fill--open-gray-500"
      />
      <rect
        x="15"
        y="23"
        width="50"
        height="33.3333"
        rx="4"
        className="-fill--openfoundation-secondary"
      />
      <path
        d="M48.5 38.8019C49.1667 39.1868 49.1667 40.1491 48.5 40.534L36.5 47.4622C35.8333 47.8471 35 47.366 35 46.5962L35 32.7398C35 31.97 35.8333 31.4888 36.5 31.8737L48.5 38.8019Z"
        className="-fill--open-gray-500"
      />
    </svg>
  );
}

export default YoutubeIcon;
