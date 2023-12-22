import React from 'react';
import PropTypes from 'prop-types';
import styles from './Industries.module.css';

function Char({ industryDesc, headingRef, sectionRef }) {
  return (
    <section ref={headingRef} id="Char" className={styles.Char}>
      <h4 ref={sectionRef} className={styles.CharTitle}>
        산업 특징
      </h4>
      <p className={styles.CharDesc}>{industryDesc}</p>
    </section>
  );
}

Char.propTypes = {
  industryDesc: PropTypes.string.isRequired,
  headingRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Char;
