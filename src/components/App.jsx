import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Layout } from './Layout/Layout';
import { SubTitle } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Layout>
  );
};
