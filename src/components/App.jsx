import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';

class App extends Component {
  state = {
    contacts: [1, 2],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
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
