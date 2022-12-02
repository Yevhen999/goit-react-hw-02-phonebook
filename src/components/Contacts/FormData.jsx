import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

class FormData extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(5);
  numberInputId = nanoid(5);

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.formLabel} htmlFor={this.nameInputId}>
          👤Name
        </label>
        <input
          className={css.formInput}
          onChange={this.handleInputChange}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
        />
        <label className={css.formLabel} htmlFor={this.numberInputId}>
          🔢Number
        </label>
        <input
          className={css.formInput}
          onChange={this.handleInputChange}
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.numberInputId}
        />
        <button className={css.btnSubmit} type="submit">
          ➕Add contact
        </button>
      </form>
    );
  }
}

export default FormData;

FormData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
