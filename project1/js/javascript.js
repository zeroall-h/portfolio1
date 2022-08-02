const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const headerHeight = header.getBoundingClientRect().height;

addEventListener("scroll", () => {
  if (scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
