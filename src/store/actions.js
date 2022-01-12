import { GET_PRODUCTS, SET_LOADING } from './constants';

import { getProducts } from '../services/products';

const getAllProducts = async (dispatch) => {
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

/* export const getOrderForm = (dispatch, form) => {
  dispatch({ type: GET_ORDER_FORM, payload: form });
};
 */
export default getAllProducts;
