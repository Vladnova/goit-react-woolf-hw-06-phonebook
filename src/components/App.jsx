import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../store/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length !== 0 && <Filter />}
      <ContactList />
    </div>
  );
};
