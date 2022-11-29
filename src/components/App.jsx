import { nanoid } from 'nanoid';
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
    this.setState(curState => {
      return { contacts: [data.name, ...curState.contacts] };
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
        <ContactsList id={nanoid()} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
