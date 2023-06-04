import { useEffect, useState } from 'react';
import UserListItem from '../UserListItem/UserListItem';
import css from './UserList.module.css';

const UserList = ({ users, updateFollowing }) => {
  const [followerIds, setFollowerIds] = useState(() => {
    return JSON.parse(localStorage.getItem('followerIds')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('followerIds', JSON.stringify(followerIds));
  }, [followerIds]);

  const hasFollowerId = id => followerIds.includes(id);

  const followingChanged = async (id, value) => {
    const result = await updateFollowing(id, value);
    if (result) {
      setFollowerIds(prevState =>
        prevState.includes(id)
          ? prevState.filter(item => item !== id)
          : [...prevState, id]
      );
    }
  };

  return (
    <ul className={css.list}>
      {users.map(user => {
        return (
          <UserListItem
            key={user.id}
            user={user}
            isFollowing={hasFollowerId(user.id)}
            onClick={followingChanged}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
