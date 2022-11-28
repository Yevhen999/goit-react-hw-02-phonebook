import { Component } from 'react';
import FormData from './FormData';

class Contacts extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <FormData onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

export default Contacts;
