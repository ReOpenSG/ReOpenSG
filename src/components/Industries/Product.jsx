import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import imageArray from './industriesProductImage.js';

function Product({ industryProducts, headingRef, sectionRef }) {
  useEffect(() => {
    AOS.init();
  });

  const productItems = Object.entries(industryProducts);

  return (
    <section ref={headingRef} id="Product" className={styles.product}>
      <h3 ref={sectionRef} className={styles.productTitle}>
        관련 제품
      </h3>
      <div className={styles.productContainer}>
        {productItems.map(([key, value]) => (
          <Link
            key={uuidv4()}
            to={`/solutions/${key}`}
            className={styles.productLink}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className={styles.linkContainer}>
              <div className={styles.image}>
                <img src={imageArray[key]} alt="제품 사진" />
              </div>
              <dl className={styles.list}>
                <dt className={styles.itemName}>
                  <span>Open {key}</span>
                </dt>
                <dt className={styles.itemDetailName}>
                  <span>{value.제품명}</span>
                </dt>
                <dd className={styles.itemDesc}>{value.제품설명}</dd>
              </dl>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

Product.propTypes = {
  industryProducts: PropTypes.object.isRequired,
  headingRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

const MemoizedProduct = React.memo(Product);

export default MemoizedProduct;
