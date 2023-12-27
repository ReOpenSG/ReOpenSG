import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/Footer/Footer.module.css';
import FacebookIcon from './icons/FacebookIcon';
import ScrollToIcon from './icons/ScrollToIcon';

function Side() {
  return (
    <div className={styles.sideWrapper}>
      <Link to="https://www.facebook.com/OpenSG.net?mibextid=LQQJ4d" target="_blank">
        <FacebookIcon />
      </Link>
      <button
        type="button"
        aria-label="위로 가기"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <ScrollToIcon />
      </button>
    </div>
  );
}

export default Side;
