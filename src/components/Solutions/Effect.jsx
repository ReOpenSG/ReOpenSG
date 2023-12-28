import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/styles.module.css';

function Effect({ currentLocation, data, headingRef, sectionRef }) {
  return (
    <section id="Effect" ref={sectionRef} className={styles.effect}>
      <h3 ref={headingRef} className={styles.title}>
        기대효과
      </h3>
      <ul className={styles.effectList}>
        {data &&
          data[currentLocation].기대효과.map((item) => (
            <li key={uuidv4()} className={styles.item}>
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

Effect.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  data: PropTypes.objectOf(
    PropTypes.shape({
      솔루션: PropTypes.string,
      제품명: PropTypes.string,
      제품설명: PropTypes.string,
      특징: PropTypes.arrayOf(PropTypes.string),
      기능: PropTypes.arrayOf(PropTypes.string),
      기대효과: PropTypes.arrayOf(PropTypes.string),
      산업군: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  headingRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Effect;
