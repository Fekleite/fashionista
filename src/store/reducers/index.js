import { SET_PRODUCTS, ADD_BAG, DELETE_BAG } from "../actions/actionTypes";

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

    case ADD_BAG:
      return {
        ...state,
        productsBag: [...state.productsBag, payload],
      };

    case DELETE_BAG:
      return {
        ...state,
        productsBag: state.productsBag.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
}

export default reducer;
