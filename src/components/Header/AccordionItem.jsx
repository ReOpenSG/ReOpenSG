import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import SitemapArrow from '@/icons/SitemapArrow';
import styles from '@/styles/styles.module.css';

function AccordionItem({
  title, children, small, medium,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.li className={`${styles.accordionItem} ${small ? styles.accordionItemSmall : ''} ${medium ? styles.accordionItemMedium : ''}`}>
        <button type="button" onClick={toggle} className={styles.subMenuButton}>
          <div>{title}</div>
          <SitemapArrow down={!isOpen} />
        </button>
      </motion.li>
      <AnimatePresence initial={false}>
        {isOpen && (
        <motion.ul
          className={styles.accordionItemList}
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
          {children}
        </motion.ul>
        )}
      </AnimatePresence>

    </>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

AccordionItem.defaultProps = {
  small: false,
  medium: false,
};

export default AccordionItem;
