import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';
import imageMap from './machinesDevicesProuductImage.js';

function Card({ title, subTitle, currentLocation, data }) {
  const imageKey = Object.keys(data[title][subTitle])[0];
  const cardImageUrl = imageMap[imageKey];

  return (
    <NavLink to={`/${currentLocation}/${subTitle}`} className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.imageContainer}>
          <img src={cardImageUrl} alt="Card 이미지" />
        </div>
        <div className={styles.textContainer}>
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
