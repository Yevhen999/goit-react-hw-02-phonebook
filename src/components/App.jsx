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
    const { name, number } = data;
    this.setState(curState => {
      return {
        contacts: [`📞${name}: ${number}`, ...curState.contacts],
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
          <h2>📱Phonebook</h2>
          <FormData onSubmit={this.formSubmitHandler} />
          <h2>📃Contacts</h2>
          <ContactsList contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
