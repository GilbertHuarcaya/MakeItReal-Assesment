import { GET_PRODUCTS, SET_LOADING, GET_TIMES, SET_TIMES } from './constants';

const initialState = {
  products: [],
  loading: false,
  times: {},
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: newValue,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: newValue,
      };
    }
    case GET_TIMES: {
      return {
        ...state,
        times: newValue,
      };
    }
    case SET_TIMES: {
      return {
        ...state,
        times: newValue,
      };
    }
    default:
      return state;
  }
}

export default reducer;
