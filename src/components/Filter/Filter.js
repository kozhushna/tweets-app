import PropTypes from 'prop-types';

const Filter = ({ onFilterChanged }) => {
  const handleSelectChange = event => {
    const value = event.target.value;
    onFilterChanged(value);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterChanged: PropTypes.func.isRequired,
};
