import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/location_defaultImage.png';
import linkIcon from '@/assets/location_link.svg';
import styles from '@/components/Location/Location.module.css';

function LocationContainer({
  locationName,
  locationPostal,
  locationAddress,
  locationTel,
  locationFax,
  locationImage,
  locationLink,
}) {
  return (
    <div className={styles.locationContainer}>
      <img className={styles.locationImage} src={locationImage} alt="본사 전경" />
      <address className={styles.locationAddress}>
        <div className={styles.locationInfoContainer}>
          <h3 className={styles.locationName}>{locationName}</h3>
          <div className={styles.addressWrapper}>
            <p>{locationPostal}</p>
            <p>{locationAddress}</p>
          </div>
          <div className={styles.locationContact}>
            <Link className={styles.locationTel} to={locationTel}>
              Tel. &nbsp;
              {locationTel}
            </Link>
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
  locationPostal: PropTypes.string.isRequired,
  locationAddress: PropTypes.string.isRequired,
  locationTel: PropTypes.string.isRequired,
  locationFax: PropTypes.string.isRequired,
  locationImage: PropTypes.string,
  locationLink: PropTypes.string.isRequired,
};

LocationContainer.defaultProps = {
  locationImage: defaultImage,
};

export default LocationContainer;
