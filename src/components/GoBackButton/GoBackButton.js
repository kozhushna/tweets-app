import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './GoBackButton.module.css';

const GoBackButton = ({ path, children }) => {
  return (
    <Link to={path} className={css.link}>
      {children}
    </Link>
  );
};

export default GoBackButton;

GoBackButton.propTypes = {
  path: PropTypes.string.isRequired,
};
