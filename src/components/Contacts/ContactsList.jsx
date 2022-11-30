import css from './Contacts.module.css';

const ContactsList = ({ contacts, id }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact}>
            <p className={css.contactItem}>{contact}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
