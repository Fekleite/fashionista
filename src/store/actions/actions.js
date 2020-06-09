import { SET_PRODUCTS, SET_PRODUCTSBAG } from "./actionTypes";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function setProductsBag(productsBag) {
  return {
    type: SET_PRODUCTSBAG,
    payload: productsBag,
  };
}
