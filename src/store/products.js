import { DELETE_PRODUCT_LIST, SET_PRODUCTS } from "./actions/actionTypes";

const INITIAL_STATE = null;

const products = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return payload;
    case DELETE_PRODUCT_LIST:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default products;
