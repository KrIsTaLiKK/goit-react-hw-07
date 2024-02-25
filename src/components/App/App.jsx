import { useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.firstSection}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <div className={css.secondSection}>
        <ContactForm />
        <div className={css.secondSectionWrap}>
          <SearchBox />
          {error && <b>Oops! Something went wrong. Please, reloading page.</b>}
          {loading && !error && <Loader />}
          {!loading && !error && <ContactList />}
        </div>
      </div>
    </div>
  );
};

export default App;
