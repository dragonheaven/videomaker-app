import React from 'react';
import * as Icon from 'react-feather';

import './style.scss';

const TopView = () => {
  return (
    <div className="top-view d-flex justify-content-center align-items-center">
      <span>T</span>
      <Icon.Square />
      <Icon.Circle />
      <Icon.Hexagon />
      <Icon.Star />
    </div>
  );
};

export default TopView;
