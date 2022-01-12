import {
  LOGIN_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  LOGOUT_USER,
  REGISTER_USER,
  GET_ALL_REVIEWS,
  GET_ORDER_FORM,
  GET_ORDERS_FROM_USER,
  POST_USER_REVIEW,
} from './constants';

const initialState = {
  isLoading: false,
  services: [],
  reviews: null,
  orderDetails: {},
  orders: [],
  userOrders: [],
  user: null,
  postReviewState: null,
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: newValue,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: newValue,
      };
    }
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: newValue,
      };
    }
    case GET_ORDER_FORM: {
      return {
        ...state,
        orderDetails: newValue,
      };
    }
    case GET_ALL_REVIEWS: {
      return {
        ...state,
        reviews: newValue,
      };
    }
    case GET_ORDERS_FROM_USER: {
      return {
        ...state,
        userOrders: newValue,
      };
    }
    case POST_USER_REVIEW: {
      return {
        ...state,
        postReviewState: newValue,
      };
    }
    default:
      return state;
  }
}

export default reducer;
