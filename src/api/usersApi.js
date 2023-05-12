import axios from 'axios'

export const addUser = async (name, email) => addUserAxios(name, email)

const addUserFetch = async (name, email) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// export const addUserAxios = async (name, email) => {
//   try {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/users',
//       { name, email }
//     );
//     return await response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

async function addUserAxios(name, email) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users',
      { name, email }
    );
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}