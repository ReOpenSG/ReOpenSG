import React from 'react';
import styles from '@/components/Contact/Contact.module.css';

function EtcIcon() {
  return (
    <svg
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconStyle}
    >
      <path
        d="M67 131C102.346 131 131 102.346 131 67C131 31.6538 102.346 3 67 3C31.6538 3 3 31.6538 3 67C3 102.346 31.6538 131 67 131Z"
        strokeWidth={6}
        strokeMiterlimit={10}
        className="stroke-current"
      />
      <path
        d="M32 76C36.9706 76 41 71.9706 41 67C41 62.0294 36.9706 58 32 58C27.0294 58 23 62.0294 23 67C23 71.9706 27.0294 76 32 76Z"
        className="fill-current"
      />
      <path
        d="M67 76C71.9706 76 76 71.9706 76 67C76 62.0294 71.9706 58 67 58C62.0294 58 58 62.0294 58 67C58 71.9706 62.0294 76 67 76Z"
        className="fill-current"
      />
      <path
        d="M102 76C106.971 76 111 71.9706 111 67C111 62.0294 106.971 58 102 58C97.0294 58 93 62.0294 93 67C93 71.9706 97.0294 76 102 76Z"
        className="fill-current"
      />
    </svg>
  );
}

export default EtcIcon;
