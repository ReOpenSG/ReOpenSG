import React from 'react';
import PropTypes from 'prop-types';
import styles from '../About.module.css';

function Palette({ rgb, cmyk, hex, roundedLeft, roundedRight }) {
  return (
    <li
      className={`
        bg-[${hex}] 
        ${styles.CommonPalette}
        ${roundedLeft && styles.left}
        ${roundedRight && styles.right}
      `}
    >
      <ul className={styles.innerList}>
        <li>{rgb}</li>
        <li>{cmyk}</li>
        <li>{hex}</li>
      </ul>
    </li>
  );
}

Palette.propTypes = {
  rgb: PropTypes.string.isRequired,
  cmyk: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
};
Palette.defaultProps = {
  roundedLeft: false,
  roundedRight: false,
};

export default Palette;
