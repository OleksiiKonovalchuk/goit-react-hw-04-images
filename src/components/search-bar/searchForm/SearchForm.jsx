import React, { Component } from 'react';
import css from './searchForm.module.scss';
import PropTypes from 'prop-types';
class SearchForm extends Component {
  state = {
    search: '',
  };
  onSearchInput = e => {
    const value = e.currentTarget.value;
    this.setState({ search: value });
  };
  render() {
    const { submitFn } = this.props;
    const { search } = this.state;
    return (
      <form
        className={css.searchForm}
        onSubmit={e => {
          e.preventDefault();
          submitFn(search);
        }}
      >
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          value={this.state.search}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.onSearchInput}
        />
      </form>
    );
  }
}
export default SearchForm;
SearchForm.propTypes = {
  submitFn: PropTypes.func,
};
