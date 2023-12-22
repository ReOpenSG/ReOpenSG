import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';
import imageMap from './importImage.js';

function Card({ title, subTitle, currentLocation, data }) {
  return (
    <NavLink to={`/${currentLocation}/${subTitle}`} className={styles.Card}>
      <div className={styles.linkTextWrapper}>
        <div className={styles.image}>
          <img src={imageMap[Object.keys(data[title][subTitle])[0]]} alt="Card 이미지" />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subTitle}</p>
        </div>
      </div>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.objectOf(
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
    ),
  ).isRequired,
};

export default Card;
