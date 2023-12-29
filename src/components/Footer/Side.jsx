import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import FacebookIcon from './icons/FacebookIcon';
import ScrollToIcon from './icons/ScrollToIcon';
import YoutubeIcon from './icons/YoutubeIcon';

function Side() {
  return (
    <div className={styles.sideWrapper}>
      <Link to="https://www.youtube.com/@opensg" target="_blank">
        <YoutubeIcon />
      </Link>
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
