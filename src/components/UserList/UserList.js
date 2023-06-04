import UserListItem from '../UserListItem/UserListItem';

const UserList = ({ users }) => {
  //   console.log(users);

  return (
    <ul>
      {users.map(user => {
        return <UserListItem key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default UserList;
