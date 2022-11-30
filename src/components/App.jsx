import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(curState => {
      return {
        contacts: [contact, ...curState.contacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;
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
          <ContactsList contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
