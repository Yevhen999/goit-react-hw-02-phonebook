import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import ContactsList from './Contacts/ContactsList';
import FormData from './Contacts/FormData';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // this.setState(curState => {
  //         return { neutral: curState.neutral + 1 };
  //       });

  formSubmitHandler = data => {
    const { contacts } = this.state;
    this.setState(curState => {
      const newContact = contacts.push(data.name);
      return { contacts: [newContact] };
    });
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
