// import { Component } from 'react/cjs/react.production.min';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import wrapper from './App.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    isSameContact(name, number)
      ? alert('This contact is already exists')
      : setContacts(contacts => [...contacts, newContact]);
  }

  function isSameContact(name, number) {
    return (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      ) || contacts.find(contact => contact.number.trim() === number.trim())
    );
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function handleFilterChange(value) {
    setFilter(value);
  }

  function filteredContacts() {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  }

  return (
    <div style={wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h1>Contacts</h1>

      <Filter onChange={handleFilterChange} value={filter} />

      {contacts && (
        <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
      )}
    </div>
  );
};
