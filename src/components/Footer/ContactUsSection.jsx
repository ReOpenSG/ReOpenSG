import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import MoveButton from '@/components/Footer/MoveButton';
import { useTranslation } from 'react-i18next';

function ContactUsSection() {
  const { t } = useTranslation('footer');
  return (
    <section className={styles.contactUsWrapper}>
      <Link to="/contact" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <span className={styles.title}>Contact Us</span>
              <span className={styles.text}>{t('title')}</span>
            </div>
            <MoveButton />
          </div>
        </div>
      </Link>
    </section>
  );
}

export default ContactUsSection;
