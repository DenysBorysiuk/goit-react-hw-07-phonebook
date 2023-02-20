import { Container, Title } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Title>Phonebook</Title>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
