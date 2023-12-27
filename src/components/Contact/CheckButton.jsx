import React from 'react';
import PropTypes from 'prop-types';

function NoticeButton({
  type, onClick, className, text,
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}

NoticeButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NoticeButton;
