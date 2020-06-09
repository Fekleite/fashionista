import { SET_PRODUCTS, SET_PRODUCTSBAG } from "../actions/actionTypes";

const INITIAL_STATE = {
  products: [],
  productsBag: [],
  // productsTotal: 0,
  // subTotal: 0,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case SET_PRODUCTSBAG:
      return {
        ...state,
        productsBag: [...state.productsBag, payload],
      };

    default:
      return state;
  }
}

export default reducer;
