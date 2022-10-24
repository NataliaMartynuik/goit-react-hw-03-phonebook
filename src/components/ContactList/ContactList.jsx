import PropTypes from 'prop-types';
import { Wraper, ContactItem, ContactText, DelButton } from './ContactList.styled'


export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <Wraper>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactText>{name}:            {number}</ContactText>
                    <DelButton type="button" onClick={() => onDeleteContact(id)}>x</DelButton>
                </ContactItem>
            ))}
        </Wraper>
    )
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};