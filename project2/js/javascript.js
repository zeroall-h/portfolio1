const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");

addEventListener("scroll", () => {
  if (scrollY > h1.offsetHeight) {
    header.classList.add("active");
    main.classList.add("active");
  } else if (scrollY <= h1.offsetHeight) {
    header.classList.remove("active");
    main.classList.remove("active");
  }
});
