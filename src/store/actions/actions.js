import { SET_PRODUCTS } from "./actionTypes";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}
