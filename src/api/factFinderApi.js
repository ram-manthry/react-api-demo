import axios from 'axios'

const numbersApiBase = `http://numbersapi.com`;

// export async function getFact(number) {
//   const response = await fetch(`${numbersApiBase}/${number}?json`);
//   return response.json();
// }

export const getFact = async (number) => {
  const response = await fetch(`${numbersApiBase}/${number}?json`);
  return response.json();
}

// function getUserName() {
//   return "ram-manthry";
// }

// const getUserName = () => {
//   return "ram-manthry";
// }

// export const getFact = async (num) => getFactAxios(num)

// export const getFactFetch = async (num) => {
//   const response = await fetch(`http://numbersapi.com/${num}?json`);
//   return await response.json();
// }

// export const getFactAxios = async (num) => {
//   const response = await axios.get(`http://numbersapi.com/${num}?json`);
//   return await response.data;
// }