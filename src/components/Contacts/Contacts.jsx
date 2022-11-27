import { Component } from 'react';
import FormContactsAdding from './FormData';

class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <FormContactsAdding />;
      </>
    );
  }
}

export default Contacts;
