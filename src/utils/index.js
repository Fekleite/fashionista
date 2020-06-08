export function handleScroll() {
  let top = document.getElementById("top");
  let location = window.location.pathname;

  if (location === "/product") {
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
