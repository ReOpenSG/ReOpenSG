import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/components/Header/Sitemap.module.css';
import SitemapArrow from '@/icons/SitemapArrow';
import SolutionsSubList from './SolutionsSubList';
import SmartMachineSubList from './SmartMachineSubList';
import SmartDeviceSubList from './SmartDeviceSubList';
import IndustriesSubList from './IndustriesSubList';

function ServiceAndSolution({ accName, expanded, setExpanded }) {
  const isOpen = expanded === accName;
  const [subExpanded, setSubExpanded] = useState('none');

  return (
    <>
      <motion.li onClick={() => setExpanded(isOpen ? 'none' : 'service')} className="py-open-md cursor-pointer">
        <div className={styles.accordionItemLarge}>
          <button type="button" className="flex flex-row w-full items-center justify-between gap-open-gutter-mobile">
            <div>Service & Solution</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial={false}>
        {(isOpen) && (
        <motion.ul
          className={styles.productListMobile}
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
          <SolutionsSubList accSubName="solutions" isMenuOpen={isOpen} subExpanded={subExpanded} setSubExpanded={setSubExpanded} />
          <SmartMachineSubList accSubName="machine" isMenuOpen={isOpen} subExpanded={subExpanded} setSubExpanded={setSubExpanded} />
          <SmartDeviceSubList accSubName="device" isMenuOpen={isOpen} subExpanded={subExpanded} setSubExpanded={setSubExpanded} />
          <IndustriesSubList accSubName="industries" isMenuOpen={isOpen} subExpanded={subExpanded} setSubExpanded={setSubExpanded} />
        </motion.ul>
        )}
      </AnimatePresence>

    </>

  );
}

ServiceAndSolution.propTypes = {
  accName: PropTypes.string.isRequired,
  expanded: PropTypes.string.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default ServiceAndSolution;
