import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HorizontalRuler = ({ interval, count, startPos }) => {
  const renderRules = () => {
    const rulers = [];
    for (let i = 0; i < count; i++) {
      rulers.push(<div
        key={i}
        style={{
          width: 0.7,
          height: 5 + (i > 0 && i % 5 === 0) * 5,
          backgroundColor: 'white',
          position: 'absolute',
          left: startPos + i * interval,
          bottom: 0,
        }}
      />);
    }
    return rulers;
  };

  return (
    <div className="horizontal-ruler position-relative">
      {
        renderRules()
      }
    </div>
  );
};

HorizontalRuler.propTypes = {
  count: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  startPos: PropTypes.number,
};

HorizontalRuler.defaultProps = {
  startPos: 0,
};


export default HorizontalRuler;
