import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';
import imageMap from './importImage.js';

function Desc({ descProps, id, currentLocation, selectedProduct, setSelectedProduct }) {
  const [typesLength, setTypesLength] = useState(0);
  const selectedProductImage = imageMap[selectedProduct];

  useEffect(() => {
    AOS.init();
  });

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
    <div className={styles.Desc}>
      <h3 className={`${styles.title} ${currentLocation === 'devices' ? 'text-center' : ''}`}>
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
                  className={`${selectedProduct === item ? styles.isClicked : ''} ${styles.button}`}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className={styles.descContentsWrapper}>
        <div className={styles.imgWrapper} data-aos="fade-in" data-aos-duration="2500">
          {selectedProductImage && (
            <img src={selectedProductImage} alt="Machines" className={styles.img} />
          )}
        </div>
        <div
          className={styles.textWrapper}
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="500"
        >
          <ul>
            {descProps.types &&
              descProps.types[selectedProduct]?.desc.map((item) => (
                <li key={uuidv4()} className={styles.description}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
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
