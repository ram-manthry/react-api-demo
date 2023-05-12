import React, { useState } from 'react';
import { addUser } from '../api/usersApi';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await addUser(name, email);
    setUser(data);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {user && (
        <div>
          <h2>User Created:</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
