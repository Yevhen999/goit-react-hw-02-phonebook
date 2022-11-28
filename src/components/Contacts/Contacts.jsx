import { Component } from 'react';
import FormData from './FormData';

class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <FormData />;
      </>
    );
  }
}

export default Contacts;
