/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import css from './modal.module.scss';
import PropTypes from 'prop-types';

const Modal = ({ url, close }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, []);
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <button onClick={close} className={css.close} type="button">
          X
        </button>
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  url: PropTypes.string,
  close: PropTypes.func,
};
