import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '@/styles/styles.module.css';
import { t } from 'i18next';

function ProductCard({ name, index, imgUrl }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.summaryWrapper}>
        <span className={styles.mainKeyword}>{name}</span>
        <div className={styles.subWrapper}>
          <p className={styles.subKeyword}>{t(`home:products.product.${index}`)}</p>
          <button type="button" className={styles.button}>
            Learn More &gt;
          </button>
        </div>
      </div>
      <img src={imgUrl} alt="product" className={styles.image} />
    </div>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
