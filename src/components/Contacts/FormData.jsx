import { Component } from 'react';
import css from './Contacts.module.css';

class FormData extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={css.formInput}
          onChange={this.handleNameChange}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default FormData;
