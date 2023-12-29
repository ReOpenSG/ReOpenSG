import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function Snb({ inViewChar, inViewFunc, inViewEffect, refs }) {
  const snbList = [
    { title: '제품 및 특징', ref: refs.charSectionRef, isActive: inViewChar && inViewChar },
    { title: '기능', ref: refs.funcSectionRef, isActive: !inViewChar && inViewFunc },
    { title: '기대 효과', ref: refs.effectSectionRef, isActive: !inViewFunc && inViewEffect },
  ];

  function onClickToSection(e) {
    const offset = 80;
    const targetElement = e.current;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  return (
    <aside className={styles.snb}>
      <nav className={styles.nav}>
        <ul className={styles.sectionList}>
          {snbList.map((section) => (
            <li key={section.title} className={section.isActive ? styles.isActive : ''}>
              <button
                type="button"
                className={styles.button}
                onClick={() => onClickToSection(section.ref)}
              >
                {section.title}
              </button>
            </li>
          ))}
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
