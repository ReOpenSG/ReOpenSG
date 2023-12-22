import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function Snb({ inViewChar, inViewFunc, inViewEffect, refs }) {
  function onClickToSection(e) {
    e.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <aside className={styles.Snb}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={inViewChar && inViewChar ? styles.item : ''}>
            <button
              type="button"
              className={styles.link}
              onClick={() => onClickToSection(refs.charSectionRef)}
            >
              제품 및 특징
            </button>
          </li>
          <li className={!inViewChar && inViewFunc ? styles.item : ''}>
            <button
              type="button"
              className={styles.link}
              onClick={() => onClickToSection(refs.funcSectionRef)}
            >
              기능
            </button>
          </li>
          <li className={!inViewFunc && inViewEffect ? styles.item : ''}>
            <button
              type="button"
              className={styles.link}
              onClick={() => onClickToSection(refs.effectSectionRef)}
            >
              기대 효과
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewFunc: PropTypes.bool.isRequired,
  inViewEffect: PropTypes.bool.isRequired,
  refs: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  ).isRequired,
};

export default Snb;
