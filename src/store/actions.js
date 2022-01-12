import { GET_PRODUCTS, SET_LOADING } from './constants';

/* export const getUserFromLocalStorage = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
}; */
import { getProducts } from '../services/products';

const getAllProducts = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await getProducts();

    const data = await response.json();
    localStorage.clear();

    if (response.ok) {
      dispatch({ type: GET_PRODUCTS, payload: data });
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
