import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';
import imageMap from './importImage.js';

function Desc({ descProps, id, currentLocation, selectedProduct, setSelectedProduct }) {
  useEffect(() => {
    if (descProps && Object.values(descProps).length > 0) {
      setSelectedProduct(Object.keys(descProps.types)[0]);
    }
  }, [descProps, setSelectedProduct]);

  function clickProduct(e) {
    setSelectedProduct(e.target.value);
  }

  const selectedProductImage = imageMap[selectedProduct];

  return (
    <div className={styles.Desc}>
      <h3 className={`${styles.title} ${currentLocation === 'devices' ? 'text-center' : ''}`}>
        {descProps.product}
        <span> - </span>
        {id}
      </h3>
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
      <div className={styles.descContentsWrapper}>
        <div className={styles.imgWrapper}>
          {selectedProductImage && (
            <img src={selectedProductImage} alt="Machines" className={styles.img} />
          )}
        </div>
        <div className={styles.textWrapper}>
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
