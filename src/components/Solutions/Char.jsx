import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/styles.module.css';

function Char({ currentLocation, data, headingRef, sectionRef }) {
  return (
    <section id="Char" ref={sectionRef} className={styles.char}>
      <span className={styles.subTitle}>
        Open
        {currentLocation}
      </span>
      <h3 ref={headingRef} className={styles.title}>
        제품 및 특징
      </h3>
      <div className={styles.productCharLisrContainer}>
        <p className={styles.containerTitle}>제품</p>
        <p className={styles.productDesc}>{data && data[currentLocation].제품설명}</p>
      </div>
      <div className={styles.productCharLisrContainer}>
        <p className={styles.containerTitle}>특징</p>
        <ul className={styles.charList}>
          {data &&
            data[currentLocation].특징.map((item) => (
              <li
                key={uuidv4()}
                className={styles.charItem}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className={styles.charItemTitle}>{Object.keys(item)}</p>
                <p>{Object.values(item)}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

Char.propTypes = {
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

const MeoizedChar = React.memo(Char);

export default MeoizedChar;
