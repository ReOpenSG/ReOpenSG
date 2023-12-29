import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import MenuLinkMobile from '@/components/Header/MenuLinkMobile';
import styles from '@/styles/styles.module.css';
import SitemapArrow from '@/icons/SitemapArrow';

function AboutUsList({ accName, expanded, setExpanded }) {
  const isOpen = expanded === accName;
  return (
    <>
      <motion.li onClick={() => setExpanded(isOpen ? 'none' : 'aboutus')} className={styles.menuList}>
        <div>
          <button type="button" className={styles.menuButton}>
            <div>About Us</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial>
        {isOpen && (
        <motion.ul
          className={styles.menuSubList}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <MenuLinkMobile linkName="회사개요" linkAddress="/about" />
          <MenuLinkMobile linkName="연혁" linkAddress="/history" />
          <MenuLinkMobile linkName="직무소개" linkAddress="/team" />
          <MenuLinkMobile linkName="오시는길" linkAddress="/location" />
        </motion.ul>
        )}
      </AnimatePresence>

    </>

  );
}

AboutUsList.propTypes = {
  accName: PropTypes.string.isRequired,
  expanded: PropTypes.string.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default AboutUsList;
