import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';
import { nanoid } from 'nanoid';
import { Filter } from './Contacts/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    for (const contact of this.state.contacts) {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }

    this.setState(curState => {
      return { contacts: [newContact, ...curState.contacts] };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(curState => ({
      contacts: curState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          color: '#010101',
        }}
      >
        <div
          style={{
            border: '2px solid tomato',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: 'yellow',
          }}
        >
          <h1>📱Phonebook</h1>
          <FormData onSubmit={this.formSubmitHandler} />
          <h1>📃Contacts</h1>
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
