import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({
  title, show, className, size, children, onClose, ...rest
}) => {
  let sizeStyle = '';
  if (size === 'large') {
    sizeStyle = 'modal-lg';
  } else if (size === 'large') {
    sizeStyle = 'modal-lg';
  }

  const onModalClick = (e) => {
    if (e.target && e.target.className.startsWith('modal ')) {
      // onClose();
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''} ${className}`} {...rest} onClick={onModalClick}>
      <div className={`modal-dialog ${sizeStyle}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="close" onClick={onClose}>×</button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

Modal.defaultProps = {
  title: '',
  className: '',
  size: 'normal',
  children: null,
};

export default Modal;
