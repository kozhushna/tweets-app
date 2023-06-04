import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
