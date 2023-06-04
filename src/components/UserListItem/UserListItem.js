// import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ user, isFollowing, onClick }) => {
  const { id, avatar, name, tweets, followers } = user;
  const formatter = new Intl.NumberFormat('en-US');
  //   const images = require.context('../../images', true);
  //   const dispatch = useDispatch();
  //   const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{formatter.format(followers)} followers</p>
      <button
        type="button"
        onClick={() => onClick(id, isFollowing ? followers - 1 : followers + 1)}
      >
        {isFollowing ? <>Following</> : <>Follow</>}
      </button>
    </li>
  );
};

UserListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default UserListItem;
