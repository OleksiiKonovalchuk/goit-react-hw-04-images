import React from 'react';
import css from './button.module.scss';
import PropTypes from 'prop-types';
const Button = ({ loadMore }) => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;
Button.propTypes = {
  loadMore: PropTypes.func,
};
