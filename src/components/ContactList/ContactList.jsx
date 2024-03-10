import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact } from 'store/sliceContacts';
import { getContacts, getFilter } from 'store/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilterChange = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalize)
    );
  };

  return (
    <ul className={styles.containerList}>
      {getFilterChange().map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
