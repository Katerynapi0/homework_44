import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Користувачі</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <Link to={`/albums?userId=${user.id}`}>
              <button>Альбом</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;