import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p className={css.contactItem}>
        📞{name}: {number}
      </p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
