let num = 0;
const slide = () => {
  num = (num + 1) % 4;
  $(".mockupMobileImage").animate(
    {
      "background-position-y": `${-1400 * num}px`,
    },
    20000
  );
};

slide();
setInterval(slide, 1000);

let number = 0;
const slide1 = () => {
  number = (number + 1) % 4;
  $(".mockupPcImage").animate(
    {
      "background-position-y": `${-1006 * number}px`,
    },
    20000
  );
};
slide1();
setInterval(slide1, 1000);
