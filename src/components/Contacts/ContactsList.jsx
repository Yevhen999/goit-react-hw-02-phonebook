const ContactsList = ({ contacts, id }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <li key={contact}>🤙{contact}</li>;
      })}
    </ul>
  );
};

export default ContactsList;
