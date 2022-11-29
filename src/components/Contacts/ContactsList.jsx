const ContactsList = ({ contacts, id }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={id}>{contact}</li>
      ))}
    </ul>
  );
};

export default ContactsList;
