import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/styles.module.css';

function Lnb({ LnbArray }) {
  return (
    <nav className={styles.lnb}>
      <ul className={styles.solutionList}>
        {LnbArray &&
          LnbArray.map((item) => (
            <li key={uuidv4()} className={styles.listItem}>
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
