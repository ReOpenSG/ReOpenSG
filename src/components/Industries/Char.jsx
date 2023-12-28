import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function Char({ industryDesc, headingRef, sectionRef }) {
  return (
    <section ref={headingRef} id="Char" className={styles.char}>
      <h3 ref={sectionRef} className={styles.charTitle}>
        산업 특징
      </h3>
      <p className={styles.charDesc}>{industryDesc}</p>
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
