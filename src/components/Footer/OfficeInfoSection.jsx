import React from 'react';
import styles from '@/styles/styles.module.css';
import { useTranslation } from 'react-i18next';

function OfficeInfoSection() {
  const { t } = useTranslation('footer');
  return (
    <section className={styles.officeWrapper}>
      <span className="sr-only">회사정보</span>
      <address className={`${styles.info} ${styles.text}`}>
        <span>{t('address')}</span>
        <div>
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
