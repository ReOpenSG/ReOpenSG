import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function MenuLinkMobile({ linkName, linkAddress }) {
  return (
    <li className="h-[24px]">
      <Link to={linkAddress} className={styles.linkNameMobile}>
        {linkName}
      </Link>
    </li>
  );
}

MenuLinkMobile.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkAddress: PropTypes.string.isRequired,
};

export default MenuLinkMobile;
