import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';
import iconMap from './imporIcon.js';

function FuncChar({ descProps, selectedProduct }) {
  return (
    <div className={styles.FuncChar}>
      <p className={styles.title}>기능 및 특징</p>
      <ul className={styles.list}>
        {descProps.types &&
          descProps.types[selectedProduct]?.char.map((item) => (
            <li key={uuidv4()} className={styles.item}>
              {/* <img src="http://via.placeholder.com/120x120" alt="Machines" /> */}
              <img
                src={iconMap[item.icon]}
                alt="Machines"
                className="desktop:w-open-5xl tablet:w-open-5xl w-open-2xl desktop:h-open-5xl tablet:h-open-5xl h-open-w-open-2xl"
              />

              {/* <div>iconMap[item[1]]</div> */}
              <span className={styles.itemText}>{item.text}</span>
            </li>
          ))}
      </ul>
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
