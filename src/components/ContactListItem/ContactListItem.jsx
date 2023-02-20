import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Item, ContactText, ContactBtn } from './ContactListItem.styled';
import { BsPersonFill, BsXLg } from 'react-icons/bs';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ContactText>
        <BsPersonFill />
        &nbsp;{name}: {phone}
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
  phone: PropTypes.string.isRequired,
};
