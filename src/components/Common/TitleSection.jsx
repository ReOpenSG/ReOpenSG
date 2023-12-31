import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function TitleSection({ background, category, title, subTitle, textAlign }) {
  return (
    <section className={`${styles.titleSection} ${background}`}>
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
