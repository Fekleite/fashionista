const URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export async function getProducts() {
  const response = await fetch(URL);
  const products = await response.json();
  return products;
}

export async function getProduct(id, products) {
  return products[id];
}

export async function getProductSizes(id, data) {
  const product = data[id];
  const sizes = [];
  const aux = product.sizes;
  aux.map((item) => {
    if (item.available) {
      sizes.push(item.size);
    }
    return true;
  });
  return sizes;
}
