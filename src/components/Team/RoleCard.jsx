import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/styles.module.css';

function RoleCard({
  src, alt, title, text,
}) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      <img
        src={src}
        alt={alt}
        aria-hidden="true"
        className={
          title === 'PM&제조팀' || title === 'R&D' || title === 'BS팀' || title === 'UX팀'
            ? 'tablet:ml-6 desktop:ml-6'
            : ''
        }
      />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

RoleCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RoleCard;
