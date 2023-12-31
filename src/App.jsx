import React, { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { Loader} from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError); 

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

return (
    <> 
      <Section title='Phonebook'>
        <ContactForm/>
      </Section>
      <Section title='Contacts'>
        <Filter/>
        {isLoading && !error && <Loader/>}
      <ContactList/>
      </Section>
    </>
  )
};
