import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function MenuLink({ linkName, linkAddress, tooltip }) {
  return (
    <li className="h-[24px]">
      <Link to={linkAddress} className={styles.linkName}>
        <span className={styles.tooltip}>
          {tooltip}
        </span>
        {linkName}
      </Link>
    </li>
  );
}

MenuLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  linkAddress: PropTypes.string.isRequired,
};

MenuLink.defaultProps = {
  tooltip: '',
};

export default MenuLink;
