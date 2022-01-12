import { GET_PRODUCTS, SET_LOADING, SET_TIMES } from './constants';

import { getProducts } from '../services/products';

/* const initialTime = Math.floor(Math.random() * 100) + 60; */

export const getAllProducts = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await getProducts();

    if (response) {
      dispatch({ type: GET_PRODUCTS, payload: response });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const setInitialTimes = async (dispatch, prods) => {
  const response = {};
  prods.forEach((product) => {
    const prodid = product.id;
    response[prodid] = Math.floor(Math.random() * 100) + 60;
  });
  if (response) {
    dispatch({ type: SET_TIMES, payload: response });
  }
};

export const updateTimes = async (dispatch, times) => {
  const id = setInterval(() => {
    Object.entries(times)
      .filter((value) => Number(value) > 0)
      .forEach(([key, value]) => {
        times.setItem(key, Number(value) - 1);
      });
    dispatch({ type: SET_TIMES, payload: times });
  }, 1000);

  clearInterval(id);
};

/* export const getOrderForm = (dispatch, form) => {
  dispatch({ type: GET_ORDER_FORM, payload: form });
};
 */
