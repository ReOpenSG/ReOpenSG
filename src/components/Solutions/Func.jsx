import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/styles.module.css';
import ImagArray from './solutionsFuncImage.js'; //

function Func({ currentLocation, data, headingRef, sectionRef }) {
  return (
    <section id="Func" ref={sectionRef} className={styles.func}>
      <h3 ref={headingRef} className={styles.title}>
        기능
      </h3>
      <div className={styles.imageContainer} data-aos="fade-in" data-aos-duration="2000">
        <img src={ImagArray[currentLocation]} className={styles.image} alt="기능 배너 이미지" />
      </div>
      <ul className={styles.funcList}>
        {data &&
          data[currentLocation].기능.map((item) => (
            <li
              key={uuidv4()}
              className={styles.item}
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

Func.propTypes = {
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

const MemoizedFunc = React.memo(Func);

export default MemoizedFunc;
