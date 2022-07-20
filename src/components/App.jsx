import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import wrapper from './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  isSameContact = (name, number) => {
    return (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      ) ||
      this.state.contacts.find(
        contact => contact.number.trim() === number.trim()
      )
    );
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const updatedContacts = [...this.state.contacts, newContact];

    this.isSameContact(name, number)
      ? alert('This contact is already exists')
      : this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  handleFilter = filter => {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  render() {
    return (
      <div style={wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h1>Contacts</h1>

        <Filter onChange={this.handleFilterChange} value={this.state.filter} />

        {this.state.contacts && (
          <ContactList
            contacts={this.handleFilter(this.state.filter)}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
