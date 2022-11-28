import { Component } from 'react';

class FormData extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleName = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <form action="">
        <input
          onChange={this.handleName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    );
  }
}

export default FormData;
