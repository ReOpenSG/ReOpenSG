import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleSection.module.css';

function TitleSection({
  background, category, title, subTitle, textAlign,
}) {
  return (
    <section className={`${styles.titleWrapper} ${background}`}>
      <div className={`${styles.titleInner} ${textAlign}`}>
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
