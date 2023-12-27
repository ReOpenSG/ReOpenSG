import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/components/Header/Sitemap.module.css';
import SitemapArrow from '@/icons/SitemapArrow';
import MenuLinkMobile from '@/components/Header/MenuLinkMobile';

function SupportList({ accName, expanded, setExpanded }) {
  const isOpen = expanded === accName;
  return (
    <>
      <motion.li onClick={() => setExpanded(isOpen ? 'none' : 'support')} className="py-open-md cursor-pointer">
        <div className={styles.accordionItemLarge}>
          <button type="button" className="flex flex-row w-full items-center justify-between gap-open-gutter-mobile">
            <div>Support</div>
            <SitemapArrow down={!isOpen} />
          </button>
        </div>
      </motion.li>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="flex flex-col gap-open-md text-open-font-large font-open-paragraph"
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
            <MenuLinkMobile linkName="커뮤니티" linkAddress="/community" />
            <MenuLinkMobile linkName="라이브러리" linkAddress="/library" />
            <MenuLinkMobile linkName="고객문의" linkAddress="/contact" />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

SupportList.propTypes = {
  accName: PropTypes.string.isRequired,
  expanded: PropTypes.string.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default SupportList;
