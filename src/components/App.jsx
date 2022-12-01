import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';
import { nanoid } from 'nanoid';
import { Filter } from './Contacts/Filter';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.includes(normalizedFilter)
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
          <ContactsList contacts={visibleContacts} />
        </div>
      </div>
    );
  }
}

export default App;
