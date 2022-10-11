import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Section/SectionTitle.styled';
import { SectionBox } from './Section/SectionTitle.styled';
import { fetchContact } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <SectionBox>
      <ContactForm />
      {isLoading && !error && <b>Request in progress.....</b>}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </SectionBox>
  );
};
export default App;
