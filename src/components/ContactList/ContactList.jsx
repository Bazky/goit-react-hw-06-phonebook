import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import propTypes from 'prop-types';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.button__list}
              onClick={() => dispatch(onDeleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  onDeleteContact: propTypes.func.isRequired,
};
