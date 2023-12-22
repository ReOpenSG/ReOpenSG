import React from 'react';
import styles from '@/components/Footer/Footer.module.css';

function OfficeInfoSection() {
  return (
    <section className={styles.officeWrapper}>
      <span className="sr-only">회사정보</span>
      <address className={`${styles.info} ${styles.text}`}>
        <span>경기도 화성시 동탄첨단산업1로 51-9 M타워 1201호</span>
        <div className="flex gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop">
          <span>T. 031-373-2612</span>
          <span>F. 031-377-2615</span>
        </div>
      </address>
      <small className={`${styles.copyright} ${styles.text}`}>
        Copyright &copy;OpenSG, All rights reserved.
      </small>
    </section>
  );
}

export default OfficeInfoSection;
