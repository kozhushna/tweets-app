import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilterChanged }) => {
  const handleSelectChange = event => {
    const value = event.target.value;

    onFilterChanged(value);
  };

  return (
    <div className={css.dropdown}>
      <select onChange={handleSelectChange} className={css.dropdownSelect}>
        <option value="" className={css.dropdownOption}>
          Show all
        </option>
        <option value="follow" className={css.dropdownOption}>
          Follow
        </option>
        <option value="followings" className={css.dropdownOption}>
          Followings
        </option>
      </select>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterChanged: PropTypes.func.isRequired,
};
