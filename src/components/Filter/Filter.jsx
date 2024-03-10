import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { getFilter } from 'store/selectors';
import { changeFilter } from 'store/sliceFilter';

const Filter = () => {

  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

  const handlerFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value))

  };
  return (
    <div className={styles.containerFilter}>
      <label>
        <p className={styles.titleFilter}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={filter}
          placeholder=" "
          onChange={handlerFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
