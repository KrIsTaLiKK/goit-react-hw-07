import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectVisibleContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const wordContacts = visibleContacts.length === 1 ? 'contact' : 'contacts';

  return (
    <div>
      <h2 className={css.contactListTitle}>Contacts</h2>
      <p className={css.totalContacts}>
        You have {visibleContacts.length} {wordContacts}
      </p>

      {visibleContacts.length > 0 && (
        <ul className={css.contactList}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
