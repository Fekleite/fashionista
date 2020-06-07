const URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export async function getProducts() {
  const response = await fetch(URL);
  const products = await response.json();
  return products;
}

// export async function getProduct(name) {
//   const response = await fetch(URL);
//   const products = await response.json();
//   let product = null;
//   products.map((item, index) => {
//     if (item.name === name) product = index;
//     return true;
//   });
//   return products[product];
// }

// export async function getProductSizes(name) {
//   const response = await fetch(URL);
//   const data = await response.json();
//   let id = null;
//   data.map((item, index) => {
//     if (item.name === name) id = index;
//     return true;
//   });
//   const product = data[id];
//   const sizes = [];
//   const aux = product.sizes;
//   aux.map((item) => {
//     if (item.available) {
//       sizes.push(item.size);
//     }
//     return true;
//   });
//   return sizes;
// }
