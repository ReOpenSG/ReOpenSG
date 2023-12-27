import React from 'react';

function SuccessIcon() {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 tablet:w-40 tablet:h-40 desktop:w-40 desktop:h-40"
    >
      <path
        d="M42.5 83.7539L65 106.254L117.5 53.7539"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="-stroke--open-accent-accent"
      />
      <path
        d="M80 155C121.421 155 155 121.421 155 80C155 38.5786 121.421 5 80 5C38.5786 5 5 38.5786 5 80C5 121.421 38.5786 155 80 155Z"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="-stroke--open-accent-accent"
      />
    </svg>
  );
}

export default SuccessIcon;
