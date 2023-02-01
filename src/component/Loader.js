import React from 'react';
import '../styles/Loader.css';
const Loader = ({
  spin = false,
  size = 20,
  color = '#222',
  centerSpin = false,
  centerSpinText = '',
}) => {
  if (centerSpin) {
    return (
      <div className="loader-center-spinner-container">
        <div
          className="loader-center-spinner"
          style={{
            width: size + 'px',
            height: size + 'px',
          }}
        ></div>
        <div>{centerSpinText || 'Please wait while we check the url'}</div>
      </div>
    );
  }

  if (spin) {
    return (
      <div
        className="loader-spinner"
        style={{
          width: size + 'px',
          height: size + 'px',
          borderColor: color,
          margin: 'auto',
        }}
      ></div>
    );
  }
  return (
    <div className="loader-container">
      <div className="loading"> </div>
    </div>
  );
};

export default Loader;
