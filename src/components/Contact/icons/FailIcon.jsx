import React from 'react';

function FailIcon() {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 tablet:w-40 tablet:h-40 desktop:w-40 desktop:h-40"
    >
      <path
        d="M80 155C121.421 155 155 121.421 155 80C155 38.5786 121.421 5 80 5C38.5786 5 5 38.5786 5 80C5 121.421 38.5786 155 80 155Z"
        stroke="#D81A1A"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M103 110L58 50"
        stroke="#D81A1A"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 110L103 50"
        stroke="#D81A1A"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FailIcon;
