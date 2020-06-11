import {
  SET_PRODUCTS,
  ADD_BAG,
  DELETE_BAG,
  UPDATE_AMOUNT,
} from "./actionTypes";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function addProductBag(productsBag) {
  return {
    type: ADD_BAG,
    payload: productsBag,
  };
}

export function deleteProductBag(id) {
  return {
    type: DELETE_BAG,
    payload: id,
  };
}

export function updateProductAmount(id, amount) {
  return {
    type: UPDATE_AMOUNT,
    payload: {
      id,
      amount,
    },
  };
}
