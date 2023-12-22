import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Home.module.css';

function ProductCard({ name, desc, imgUrl }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.summaryWrapper}>
        <span className={styles.mainKeyword}>{name}</span>
        <div className={styles.subWrapper}>
          <p className={styles.subKeyword}>{desc}</p>
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
  desc: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
