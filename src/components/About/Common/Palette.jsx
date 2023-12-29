import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function Palette({ rgb, cmyk, hex, roundedLeft, roundedRight, delay }) {
  return (
    <li
      style={{ backgroundColor: hex }}
      className={`
        ${styles.commonPalette}
        ${roundedLeft && styles.left}
        ${roundedRight && styles.right}
      `}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={delay}
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
  delay: PropTypes.string.isRequired,
};
Palette.defaultProps = {
  roundedLeft: false,
  roundedRight: false,
};

export default Palette;
