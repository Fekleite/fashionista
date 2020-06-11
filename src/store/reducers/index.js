import {
  SET_PRODUCTS,
  ADD_BAG,
  DELETE_BAG,
  UPDATE_AMOUNT,
} from "../actions/actionTypes";

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

    case UPDATE_AMOUNT:
      return {
        ...state,
        productsBag: state.productsBag.map((item) =>
          item.id === payload.id
            ? { ...item, amount: payload.amount }
            : { ...item }
        ),
      };

    default:
      return state;
  }
}

export default reducer;
