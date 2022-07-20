import { Button, Ul, Li } from './ContactList.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
