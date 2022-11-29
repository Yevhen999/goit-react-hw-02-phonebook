import { nanoid } from 'nanoid';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid}>{contact}</li>
      ))}
    </ul>
  );
};

export default ContactsList;
