import React from 'react';
import css from './Searchbar.module.scss';
const Searchbar = ({ children }) => {
  return <header className={css.searchbar}>{children}</header>;
};

export default Searchbar;
