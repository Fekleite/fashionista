export function handleScroll() {
  let top = document.getElementById("top");
  let location = window.location.pathname;
  let flag = 0;

  if (location !== "/") {
    top.classList.add("location");
    flag = 1;
  } else {
    if (flag !== 0) {
      top.classList.remove("location");
    }

    if (document.documentElement.scrollTop > 5) {
      top.classList.add("scroll");
    } else {
      top.classList.remove("scroll");
    }
  }
}

// export function handleToWithoutSpaces(name) {
//   const nameLower = name.toLowerCase();
//   const arrayWithoutSpaces = nameLower.split(" ");
//   const nameWithoutSpaces = arrayWithoutSpaces.join("-");
//   return nameWithoutSpaces;
// }

// export function handleToSpaces(name) {
//   const arraySpaces = name.split("-");
//   const nameLower = arraySpaces.join(" ");
//   const nameUpper = nameLower.toUpperCase();
//   return nameUpper;
// }
