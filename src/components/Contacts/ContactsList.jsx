const ContactsList = ({ contacts, id }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact}>
            <p>{contact}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
