import css from './Contacts.module.css';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p className={css.contactItem}>
              {contact.name}: {contact.number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
