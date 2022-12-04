import { nanoid } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FcPhoneAndroid } from 'react-icons/fc';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Too short').required('❌'),
  number: yup.string().length(9, 'Format: xxx-xx-xx').required('❌'),
});

export const FormData = ({ onFormSubmit }) => {
  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label className={css.formLabel} htmlFor={nameInputId}>
          👤Name
        </label>
        <Field
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
        <ErrorMessage name="name" />
        <label className={css.formLabel} htmlFor={numberInputId}>
          <FcPhoneAndroid width="20" height="20" /> Number
        </label>
        <Field
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
        <ErrorMessage name="number" />
        <button className={css.btnSubmit} type="submit">
          ➕Add contact
        </button>
      </Form>
    </Formik>
  );
};

FormData.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
