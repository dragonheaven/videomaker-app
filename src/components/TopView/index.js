import React from 'react';
import * as Icon from 'react-feather';
import { FormatColorText, ShortText } from '@material-ui/icons';

import './style.scss';

const TopView = () => (
  <div className="top-view d-flex justify-content-center align-items-center">
    <span>T</span>
    <Icon.Square />
    <Icon.Circle />
    <Icon.Hexagon />
    <Icon.Star />
  </div>
);

export default TopView;
