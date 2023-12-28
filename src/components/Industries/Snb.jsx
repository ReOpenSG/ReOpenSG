import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

const navItem = [
  { name: '산업 특징', refKey: 'charSectionRef' },
  { name: '관련 제품', refKey: 'productSectionRef' },
];

function Snb({ inViewChar, inViewProduct, refs }) {
  function onClickToSection(targetRef) {
    const offset = 120; // 원하는 offset 값 설정

    if (targetRef.current) {
      const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
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
          {navItem.map((item, index) => (
            <li
              key={item.name}
              className={
                (index === 0 && inViewChar) || (index !== 0 && !inViewChar && inViewProduct)
                  ? styles.item
                  : ''
              }
            >
              <button
                type="button"
                className={styles.button}
                onClick={() => onClickToSection(refs[item.refKey])}
              >
                {item.name}
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
  inViewProduct: PropTypes.bool.isRequired,
  refs: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  ).isRequired,
};

export default Snb;
