import React from 'react';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/location_defaultImage.png';
import linkIcon from '@/assets/location_link.svg';
import styles from '@/styles/styles.module.css';

function LocationContainer({
  locationName,
  locationPostal,
  locationAddress,
  locationTel,
  locationFax,
  locationImage,
  locationLink,
  delay,
}) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} data-aos-duration="2000" className={styles.locationContainer}>
      <img className={styles.locationImage} src={locationImage} alt="본사 전경" />
      <address className={styles.locationInfo}>
        <div className={styles.locationInfoContainer}>
          <h3 className={styles.locationName}>{locationName}</h3>
          <div>
            <p>{locationPostal}</p>
            <p>{locationAddress}</p>
          </div>
          <div className={styles.locationContact}>
            <p>
              Tel. &nbsp;
              {locationTel}
            </p>
            <p>
              Fax. &nbsp;
              {locationFax}
            </p>
          </div>
        </div>
        <a className={styles.locationLink} href={locationLink} target="_blank" rel="noreferrer">
          <img className={styles.linkIcon} src={linkIcon} alt="지도 링크" />
        </a>
      </address>
    </div>
  );
}

LocationContainer.propTypes = {
  locationName: PropTypes.string.isRequired,
  locationPostal: PropTypes.string,
  locationAddress: PropTypes.string.isRequired,
  locationTel: PropTypes.string.isRequired,
  locationFax: PropTypes.string.isRequired,
  locationImage: PropTypes.string,
  locationLink: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};

LocationContainer.defaultProps = {
  locationPostal: '',
  locationImage: defaultImage,
};

export default LocationContainer;
