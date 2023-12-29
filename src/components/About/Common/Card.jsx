import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function Card({ title, desc, children, delay }) {
  return (
    <li
      className={styles.commonCard}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={delay}
    >
      <div className={styles.cardContainer}>
        <div className={styles.titleSubTitleContainer}>
          <span className={styles.titleText}>{title}</span>
          <div className={styles.subTitleText}>{children}</div>
        </div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </li>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.string.isRequired,
};

export default Card;
