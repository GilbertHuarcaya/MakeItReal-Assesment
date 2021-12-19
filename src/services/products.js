/* eslint-disable no-console */
/* eslint-disable consistent-return */
const apiUrl = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const res = await fetch(`${apiUrl}/products`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/products/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
