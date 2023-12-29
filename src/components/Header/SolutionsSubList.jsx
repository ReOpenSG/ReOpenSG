import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import AccordionItem from '@/components/Header/AccordionItem';
import MenuLinkMobile from '@/components/Header/MenuLinkMobile';
import styles from '@/styles/styles.module.css';
import SitemapArrow from '@/icons/SitemapArrow';

function SolutionsSubList({
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
      <motion.li onClick={() => setSubExpanded(isOpen ? 'none' : 'solutions')}>
        <div className={styles.accordionItemMedium}>
          <button type="button" className={styles.subMenuButton}>
            <div>Solutions</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial>
        {isOpen && (
        <motion.ul
          className={styles.solutionsSubList}
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
          <AccordionItem title="Equipment Control System" small>
            <MenuLinkMobile linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
            <MenuLinkMobile linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
            <MenuLinkMobile linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
            <MenuLinkMobile linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
            <MenuLinkMobile linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
          </AccordionItem>
          <AccordionItem title="Smart Tools" small>
            <MenuLinkMobile linkName="Map Designer" linkAddress="solutions/Map Designer" />
            <MenuLinkMobile linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
            <MenuLinkMobile linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
          </AccordionItem>
          <AccordionItem title="Monitoring Solution" small>
            <MenuLinkMobile linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
          </AccordionItem>
          <AccordionItem title="Comm Driver" small>
            <MenuLinkMobile linkName="Open HSMS" linkAddress="solutions/HSMS" />
          </AccordionItem>
        </motion.ul>
        )}
      </AnimatePresence>
    </>

  );
}

SolutionsSubList.propTypes = {
  accSubName: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  subExpanded: PropTypes.string.isRequired,
  setSubExpanded: PropTypes.func.isRequired,
};

export default SolutionsSubList;
