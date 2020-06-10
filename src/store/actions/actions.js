import {
  SET_PRODUCTS,
  SET_PRODUCTSBAG,
  DELETE_PRODUCT_BAG,
} from "./actionTypes";

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

export function deleteProductBag(id) {
  return {
    type: DELETE_PRODUCT_BAG,
    payload: id,
  };
}
