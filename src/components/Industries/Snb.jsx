import React from 'react';
import PropTypes from 'prop-types';
import styles from './Industries.module.css';

function Snb({ inViewChar, inViewProduct, refs }) {
  function onClickToSection(e) {
    const offset = 80; // 원하는 offset 값 설정
    const targetElement = e.current;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    }
  }
  return (
    <aside className={styles.Snb}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={inViewChar ? styles.item : ''}>
            <button
              type="button"
              className={styles.link}
              onClick={() => onClickToSection(refs.charSectionRef)}
            >
              산업 특징
            </button>
          </li>
          <li className={!inViewChar && inViewProduct ? styles.item : ''}>
            <button
              type="button"
              className={styles.link}
              onClick={() => onClickToSection(refs.productSectionRef)}
            >
              관련 제품
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewProduct: PropTypes.bool.isRequired,
  refs: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  ).isRequired,
};

export default Snb;
