import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <form className={css.form}>
    <label className={css.label}>
      Find contacts by name:{' '}
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
