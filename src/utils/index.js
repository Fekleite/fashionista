export function handleScroll() {
  let top = document.getElementById("top");
  if (document.documentElement.scrollTop > 5) {
    top.classList.add("scroll");
  } else {
    top.classList.remove("scroll");
  }
}
