const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li>{contact}</li>
      ))}
    </ul>
  );
};

export default ContactsList;
