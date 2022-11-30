import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    this.setState(curState => {
      return {
        contacts: [`${data.name}: ${data.number}`, ...curState.contacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100%',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <FormData onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
