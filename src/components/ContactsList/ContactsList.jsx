import React from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelContact }) => (
  <ul className={css.constactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <p className={css.contactName}>
          {name}: {number}
        </p>
        <button
          className={css.contactBtn}
          type="button"
          onClick={() => onDelContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};
