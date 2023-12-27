import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import SitemapDesktop from './SitemapDesktop';
import SitemapMobile from './SitemapMobile';

function Sitemap({ isOpen }) {
  Modal.setAppElement('#root');

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(5px)',
          zIndex: '10',
        },
        content: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0px',
          left: '0px',
          background: '#000000',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: '0px',
          border: 'none',
          borderRadius: '0px',
        },
      }}
      shouldCloseOnEsc
      isOpen={isOpen}
    >
      <SitemapDesktop isOpen={isOpen} />
      <SitemapMobile />
    </Modal>
  );
}

Sitemap.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sitemap;
