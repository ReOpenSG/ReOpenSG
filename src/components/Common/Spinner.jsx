import React from 'react';
import { PropTypes } from 'prop-types';

function Spinner({ size, message, colors }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
  };
  return (
    <div style={containerStyle}>
      <svg
        width={size}
        height={size}
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <title>{message}</title>
        <circle cx="80" cy="50" r="5" fill={colors[0]}>
          <animate
            attributeName="cx"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="80;35.00000000000001"
          />
          <animate
            attributeName="cy"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="50;75.98076211353316"
          />
          <animate
            attributeName="fill"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="#0071E3;#3fa9f5"
          />
        </circle>
        <circle cx="35" cy="75.981" r="5" fill={colors[1]}>
          <animate
            attributeName="cx"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="35.00000000000001;34.999999999999986"
          />
          <animate
            attributeName="cy"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="75.98076211353316;24.019237886466847"
          />
          <animate
            attributeName="fill"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="#3fa9f5;#0b6399"
          />
        </circle>
        <circle cx="35" cy="24.019" r="5" fill={colors[2]}>
          <animate
            attributeName="cx"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="34.999999999999986;80"
          />
          <animate
            attributeName="cy"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="24.019237886466847;49.99999999999999"
          />
          <animate
            attributeName="fill"
            dur="1.282051282051282s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="#0b6399;#0071E3"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number,
  message: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

Spinner.defaultProps = {
  size: 300,
  message: '로딩 중...',
  colors: ['#93dbe9', '#689cc5', '#5e6fa3'],
};
