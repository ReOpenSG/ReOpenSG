import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import MenuLinkMobile from '@/components/Header/MenuLinkMobile';
import styles from '@/components/Header/Sitemap.module.css';
import SitemapArrow from '@/icons/SitemapArrow';

function SmartDeviceSubList({
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
      <motion.li onClick={() => setSubExpanded(isOpen ? 'none' : 'device')}>
        <div className={styles.accordionItemMedium}>
          <button type="button" className="flex flex-row w-full items-center justify-between gap-open-gutter-mobile">
            <div>Smart Device</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial>
        {isOpen && (
        <motion.ul
          className="flex flex-col gap-open-md text-open-font-medium font-open-paragraph"
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
          <MenuLinkMobile linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
        </motion.ul>
        )}
      </AnimatePresence>

    </>

  );
}

SmartDeviceSubList.propTypes = {
  accSubName: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  subExpanded: PropTypes.string.isRequired,
  setSubExpanded: PropTypes.func.isRequired,
};

export default SmartDeviceSubList;
