import React from 'react';
import Headroom from 'react-headroom';

const FixedBackground = () => {
  return (
    <>
      <div className="fixed-background" />
      <Headroom className="layout-page-nav">
        <div className="fixed-logo-white" />
        <div className="fixed-logo-green" />
      </Headroom>
    </>
  );
};

export default FixedBackground;
