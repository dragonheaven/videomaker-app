import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const VerticalRuler = ({ count }) => {
  const renderRules = () => {
    const rulers = [];
    for (let i = 0; i < count; i++) {
      rulers.push(<div
        key={i}
        style={{
          height: 0.7,
          width: 5 + (i > 0 && i % 5 === 0) * 5,
          backgroundColor: 'white',
          position: 'absolute',
          top: i * 5,
          right: 0,
        }}
      />);
    }
    return rulers;
  };

  return (
    <div className="vertical-ruler position-relative">
      {
        renderRules()
      }
    </div>
  );
};

VerticalRuler.propTypes = {
  count: PropTypes.number.isRequired,
};

export default VerticalRuler;
