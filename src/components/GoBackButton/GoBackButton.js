import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackButton = ({ path, children }) => {
  return <Link to={path}>{children}</Link>;
};

export default GoBackButton;

GoBackButton.propTypes = {
  path: PropTypes.object.isRequired,
};
