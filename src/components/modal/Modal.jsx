import { Component } from 'react';
import css from './modal.module.scss';
import PropTypes from 'prop-types';
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }
  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { url, close } = this.props;
    const { closeModal } = this;
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
  }
}
export default Modal;
Modal.propTypes = {
  url: PropTypes.string,
  close: PropTypes.func,
};
