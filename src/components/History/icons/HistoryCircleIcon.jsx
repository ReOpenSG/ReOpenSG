import React from 'react';
import PropTypes from 'prop-types';

function HistoryCircleIcon({
  width, height, fill, stroke,
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle id="Ellipse 67" cx="8" cy="8" r="7.5" fill={fill} stroke={stroke} />
    </svg>

  );
}

HistoryCircleIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

export default HistoryCircleIcon;
