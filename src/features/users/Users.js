import React from 'react';
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector(state => state.users);
  const userCount = useSelector(state => state.users.length);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
    </div>
  );
}

export default Users;
