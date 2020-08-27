import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({
  name, value, className, remember, onChange, ...rest
}) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChangeValue = (e) => {
    setText(e.target.value);
    onChange(name, e.target.value);
  };

  return (
    <input
      type="text"
      name={remember ? name : null}
      value={text}
      className={`form-control ${className}`}
      {...rest}
      onChange={(e) => handleChangeValue(e)}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  remember: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  className: '',
  remember: false,
  onChange: () => {},
};

export default Input;
