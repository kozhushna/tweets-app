// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const UserListItem = ({ user }) => {
  const { id, avatar, name, tweets, followers } = user;

  //   const dispatch = useDispatch();
  //   const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>

      <button type="button">Follow</button>
    </li>
  );
};

UserListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};

export default UserListItem;
