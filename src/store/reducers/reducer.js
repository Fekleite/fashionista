import { SET_PRODUCTS } from "../actions/actionTypes";

const INITIAL_STATE = {
  products: [],
  productsBag: [],
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
}

export default reducer;
