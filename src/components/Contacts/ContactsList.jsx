import css from './Contacts.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p className={css.contactItem}>
              📞{contact.name}: {contact.number}
            </p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
