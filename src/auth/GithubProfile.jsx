import React, { useState } from 'react';
import { getGithubProfile } from '../api/githubApi';

function GithubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await getGithubProfile(username, token)
      setData(data);
    } catch(e) {
      setError(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          GitHub Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Personal Access Token:
          <input type="text" value={token} onChange={(event) => setToken(event.target.value)} />
        </label>
        <button type="submit">Fetch User Info</button>
      </form>
      {data && (
        <div>
          <h2>User Info:</h2>
          <p>Username: {data.login}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default GithubUser;
