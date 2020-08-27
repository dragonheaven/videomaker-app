import React, {useState} from 'react';
import { SketchPicker } from 'react-color';

import './style.scss';
import PropTypes from 'prop-types';

const ColorPicker = ({ color, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="color-picker">
      <div className="w-100 h-100" style={{ backgroundColor: color }} onClick={() => setIsOpen(!isOpen)} />
      {
        isOpen && (
          <div className="opener">
            <SketchPicker
              color={color || ''}
              onChangeComplete={(color) => {
                setColor(color.hex);
                setIsOpen(false);
              }}
            />
          </div>
        )
      }
    </div>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func.isRequired,
};

ColorPicker.defaultProps = {
  color: null,
};

export default ColorPicker;
