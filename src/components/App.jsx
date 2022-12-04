import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import { FormData } from './Contacts/FormData';
import { nanoid } from 'nanoid';
import { Filter } from './Contacts/Filter';
import { RiGameFill } from 'react-icons/ri';
import css from './Contacts/Contacts.module.css';

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
      contacts: curState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

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
          <div className={css.phonebookWrapper}>
            <RiGameFill
              size={25}
              style={{
                fill: 'tomato',
              }}
            />
            <h1>Phonebook</h1>
          </div>
          <FormData onFormSubmit={this.formSubmitHandler} />
          <h1
            style={{
              marginBottom: '10px',
            }}
          >
            📃Contacts
          </h1>
          {this.state.contacts.length > 0 ? (
            <>
              <Filter filter={filter} onChange={this.changeFilter} />
              <ContactsList
                items={visibleContacts}
                deleteContact={this.deleteContact}
              />
            </>
          ) : (
            <p>There are no contacts</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
