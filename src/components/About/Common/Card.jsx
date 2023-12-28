import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import styles from '../About.module.css';

function Card({ title, desc, children, delay }) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <li
      className={styles.CommomCard}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={delay}
    >
      <div className={styles.carWrapper}>
        <div className={styles.title}>
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
