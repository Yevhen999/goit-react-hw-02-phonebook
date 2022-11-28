import { Component } from 'react';
import Contacts from './Contacts/Contacts';

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Contacts />
      </div>
    );
  }
}

export default App;
