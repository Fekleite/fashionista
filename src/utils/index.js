export function setStyles() {
  const top = document.getElementById("top");
  let location = window.location.pathname;

  if (location !== "/") {
    top.classList.add("location");
  } else {
    top.classList.remove("location");

    if (document.documentElement.scrollTop > 5) {
      top.classList.add("scroll");
    } else {
      top.classList.remove("scroll");
    }
  }
}

export function setBackTop() {
  const height = window.innerHeight;

  if (document.documentElement.scrollTop > height * 1.5) {
    return true;
  } else {
    return false;
  }
}

export function formatPrice(price) {
  const arrayPrices = price.split(" ");
  const stringPrice = arrayPrices[1].split(",");
  const numberPrice = Number(stringPrice.join("."));
  return numberPrice;
}
