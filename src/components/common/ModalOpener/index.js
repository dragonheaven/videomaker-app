import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Portal from '../Portal';

const ModalOpener = ({ children, isOpen }) => (
  <Transition
    in={isOpen}
    mountOnEnter
    unmountOnExit
    timeout={10}
    appear
    enter
    exit
  >
    {() => (
      <Portal id="modals">
        <div>
          {children}
        </div>
      </Portal>
    )}
  </Transition>
);

ModalOpener.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default ModalOpener;
