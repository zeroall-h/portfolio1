const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY < 10) {
    header.setAttribute("style", "background: transparent;");
  } else if (window.scrollY < 700) {
    header.setAttribute("style", "background: #fff;");
  } else {
    header.setAttribute("style", "background: #fff");
    h1.setAttribute("style", "width: 10rem");
  }
});
