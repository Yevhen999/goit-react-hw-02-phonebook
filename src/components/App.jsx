import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    this.setState(curState => {
      return { contacts: [data.name, ...curState.contacts] };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FormData onSubmit={this.formSubmitHandler} />
        <Contacts />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
