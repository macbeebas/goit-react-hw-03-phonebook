import React, { Component } from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.formContainer}>
        <form className={css.formMain} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            <p>Name</p>
            <input
              className={css.formInput}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
          <label className={css.formLabel}>
            <p>Number</p>
            <input
              className={css.formInput}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.buttonAdd} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
