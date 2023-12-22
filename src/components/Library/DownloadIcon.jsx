import React from 'react';
import styles from '@/components/Library/Library.module.css';

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconStyle}
    >
      <path
        d="M12 18.132L5.93486 12.0651L7.14686 10.8326L11.1429 14.8286V0H12.8571V14.8286L16.8514 10.8343L18.0651 12.0651L12 18.132ZM2.76857 24C1.98 24 1.32171 23.736 0.793714 23.208C0.264571 22.6789 0 22.02 0 21.2314V17.0777H1.71429V21.2314C1.71429 21.4943 1.824 21.736 2.04343 21.9566C2.264 22.176 2.50571 22.2857 2.76857 22.2857H21.2314C21.4943 22.2857 21.736 22.176 21.9566 21.9566C22.176 21.736 22.2857 21.4943 22.2857 21.2314V17.0777H24V21.2314C24 22.02 23.736 22.6783 23.208 23.2063C22.6789 23.7354 22.02 24 21.2314 24H2.76857Z"
        className={styles.iconChange}
      />
    </svg>
  );
}

export default DownloadIcon;
