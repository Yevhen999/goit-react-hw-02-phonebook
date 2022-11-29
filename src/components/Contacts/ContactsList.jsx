import { nanoid } from 'nanoid';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const id = nanoid();
        return <li key={id}>{contact}</li>;
      })}
    </ul>
  );
};

export default ContactsList;
