import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import MenuLinkMobile from '@/components/Header/MenuLinkMobile';
import styles from '@/styles/styles.module.css';
import SitemapArrow from '@/icons/SitemapArrow';

function SmartMachineSubList({
  accSubName, isMenuOpen, subExpanded, setSubExpanded,
}) {
  const isOpen = subExpanded === accSubName;

  useEffect(() => {
    if (isMenuOpen) {
      setSubExpanded('none');
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.li onClick={() => setSubExpanded(isOpen ? 'none' : 'machine')}>
        <div className={styles.accordionItemMedium}>
          <button type="button" className={styles.subMenuButton}>
            <div>Smart Machine</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial>
        {isOpen && (
        <motion.ul
          className={styles.machineSubList}
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
          <MenuLinkMobile linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
          <MenuLinkMobile linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
          <MenuLinkMobile linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
          <MenuLinkMobile linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
        </motion.ul>
        )}
      </AnimatePresence>

    </>

  );
}

SmartMachineSubList.propTypes = {
  accSubName: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  subExpanded: PropTypes.string.isRequired,
  setSubExpanded: PropTypes.func.isRequired,
};

export default SmartMachineSubList;
