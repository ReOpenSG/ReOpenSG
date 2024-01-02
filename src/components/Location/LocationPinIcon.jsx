import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function LocationPinIcon({ usa }) {
  return (
    <div className={usa ? styles.pinIconUSA : styles.pinIcon}>
      <svg
        data-aos="zoom-in-down"
        data-aos-offset="10"
        data-aos-delay={usa ? '700' : '500'}
        data-aos-duration="1000"
        viewBox="0 0 28 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3836 27.3087C23.9685 25.4684 28 20.2074 28 14.0044C28 6.27 21.732 0 14 0C6.26801 0 0 6.27 0 14.0044C0 20.2074 4.03147 25.4684 9.61639 27.3087H4.8454C3.49117 27.3087 2.53196 28.6317 2.95264 29.9193L12.3314 58.6269C12.9296 60.4577 15.5188 60.4577 16.117 58.6268L25.4956 29.9193C25.9162 28.6317 24.957 27.3087 23.6028 27.3087H18.3836Z"
          fill="#F2C00C"
        />
      </svg>
    </div>
  );
}

LocationPinIcon.propTypes = {
  usa: PropTypes.bool,
};

LocationPinIcon.defaultProps = {
  usa: false,
};

export default LocationPinIcon;
