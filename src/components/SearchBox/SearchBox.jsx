import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContacts } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const searchQueryId = useId();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchWrap}>
      <label htmlFor={searchQueryId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        name="searchQuery"
        placeholder="Search by name..."
        id={searchQueryId}
        value={filterValue}
        onChange={e => dispatch(searchContacts(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
