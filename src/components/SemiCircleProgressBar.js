import React from 'react';

const SemiCircleProgressBar = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  const strokeDasharray = `${percentage}, 100`;

  return (
    <div className="progress-bar-container">
      <svg className="progress-bar" viewBox="0 0 36 18">
        <path
          className="progress-bar-bg"
          d="M18 1
             a 17 17 0 0 1 0 34
             a 17 17 0 0 1 0 -34"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="2"
        />
        <path
          className="progress-bar-progress"
          d="M18 1
             a 17 17 0 0 1 0 34
             a 17 17 0 0 1 0 -34"
          fill="none"
          stroke="#0052cc"
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
        />
        <circle className="progress-bar-thumb" cx="18" cy="1" r="2" fill="#fff" stroke="#0052cc" strokeWidth="2" />
      </svg>
      <div className="progress-bar-text">
        <strong>{value} GB</strong>
        <p>out of {maxValue} GB ({percentage.toFixed(0)}%)</p>
      </div>
    </div>
  );
};

export default SemiCircleProgressBar;
