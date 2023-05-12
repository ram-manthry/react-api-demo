export const getGithubProfile = async (username, token) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
      throw new Error(error.message);
  }
}