import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Item, ContactText, ContactBtn } from './ContactListItem.styled';
import { BsPersonFill, BsXLg } from 'react-icons/bs';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ContactText>
        <BsPersonFill />
        &nbsp;{name}: {number}
      </ContactText>
      <ContactBtn onClick={handleDelete}>
        <BsXLg />
      </ContactBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
