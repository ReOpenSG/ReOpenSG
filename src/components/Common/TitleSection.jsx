import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import styles from './TitleSection.module.css';

function TitleSection({
  background, category, title, subTitle, textAlign,
}) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className={`${styles.titleWrapper} ${background}`}>
      <div
        className={`${styles.titleInner} ${textAlign}`}
        data-aos={textAlign === 'text-center' ? 'fade-up' : 'fade-right'}
        data-aos-duration="1200"
      >
        <h2>{category}</h2>
        <p>
          <span>{title}</span>
          <span>{subTitle}</span>
        </p>
      </div>
    </section>
  );
}

TitleSection.defaultProps = {
  subTitle: '',
};

TitleSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  textAlign: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default TitleSection;
