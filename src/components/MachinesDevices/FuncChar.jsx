import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';
import iconMap from './machinesDevicesFuncCharImage.js';

function FuncChar({ descProps, selectedProduct }) {
  return (
    <div className={styles.funcChar}>
      <div className={styles.inner}>
        <p className={styles.title}>기능 및 특징</p>
        <ul className={styles.funcCharList}>
          {descProps.types &&
            descProps.types[selectedProduct]?.char.map((item, index) => (
              <li
                key={uuidv4()}
                className={styles.item}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 350}
              >
                <img src={iconMap[item.icon]} alt="Machines" className={styles.img} />
                <span className={styles.itemText}>{item.text}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

FuncChar.propTypes = {
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
  selectedProduct: PropTypes.string,
};

FuncChar.defaultProps = {
  selectedProduct: '',
};

export default FuncChar;
