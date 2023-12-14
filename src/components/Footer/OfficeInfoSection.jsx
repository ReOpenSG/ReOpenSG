import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/Footer/Footer.module.css';

function OfficeInfoSection() {
  return (
    <section className={styles.officeWrapper}>
      <h3 className="sr-only">회사정보</h3>
      <address className={`${styles.info} ${styles.text}`}>
        <span>경기도 화성시 동탄첨단산업1로 51-9 M타워 1201호</span>
        <div className="flex gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop">
          <Link to="tel:031-373-2612">T. 031-373-2612</Link>
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
