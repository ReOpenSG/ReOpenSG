import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function Lnb({ LnbArray }) {
  return (
    <nav className={styles.Lnb}>
      <ul className={styles.list}>
        {LnbArray &&
          LnbArray.map((item) => (
            <li key={item} className={styles.listItem}>
              <NavLink
                to={`/solutions/${item}`}
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              >
                {item}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

Lnb.propTypes = {
  LnbArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Lnb;
