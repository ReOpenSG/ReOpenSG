import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';
import imageMap from './machinesDevicesProuductImage.js';

function Desc({ descProps, id, currentLocation, selectedProduct, setSelectedProduct }) {
  const [typesLength, setTypesLength] = useState(0);
  const selectedProductImage = imageMap[selectedProduct];
  useEffect(() => {
    setTypesLength(Object.keys(descProps.types).length);
  }, [descProps.types]);

  useEffect(() => {
    if (descProps && Object.values(descProps).length > 0) {
      setSelectedProduct(Object.keys(descProps.types)[0]);
    }
  }, [descProps, setSelectedProduct]);

  function clickProduct(e) {
    setSelectedProduct(e.target.value);
  }

  return (
    <section className={styles.desc}>
      <div className={styles.inner}>
        <h3 className={`${styles.title} ${currentLocation === 'devices' && styles.titleCenter}`}>
          {descProps.product}
          <span> - </span>
          {id}
        </h3>
        {typesLength > 1 && (
          <ul className={styles.buttonList}>
            {descProps.types &&
              Object.keys(descProps.types).map((item) => (
                <li key={uuidv4()}>
                  <button
                    type="button"
                    value={item}
                    onClick={clickProduct}
                    className={`${selectedProduct === item ? styles.isClicked : ''} ${
                      styles.button
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
          </ul>
        )}
        <div className={styles.descContainer}>
          <div className={styles.imgContainer} data-aos="fade-in" data-aos-duration="1500">
            {selectedProductImage && (
              <img src={selectedProductImage} alt="Machines" className={styles.img} />
            )}
          </div>
          <div
            className={styles.textContainer}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <ul className={styles.descList}>
              {descProps.types &&
                descProps.types[selectedProduct]?.desc.map((item) => (
                  <li key={uuidv4()} className={styles.descText}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Desc.propTypes = {
  descProps: PropTypes.shape({
    types: PropTypes.objectOf(
      PropTypes.shape({
        char: PropTypes.arrayOf(
          PropTypes.shape({
            icon: PropTypes.string,
            text: PropTypes.string,
          }),
        ),
        desc: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    product: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
  selectedProduct: PropTypes.string,
  setSelectedProduct: PropTypes.func.isRequired,
};

Desc.defaultProps = {
  selectedProduct: '',
};

export default Desc;
