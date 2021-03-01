import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ModalWrapper from './styles/ModalWrapper';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '-100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: '1',
        }}
      >
        {children({
          'data-modal-safe-area': true,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
