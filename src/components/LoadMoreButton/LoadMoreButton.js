import PropTypes from 'prop-types';
import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
