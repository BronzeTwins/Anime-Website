let color = [
  "#00ff04",
  "#00ffa2",
  "#00fff2",
  "#0091ff",
  "#001eff",
  "#5500ff",
  "#8c00ff",
  "#c800ff",
  "#ff00c8",
  "#ff0073",
  "#00ff37",
  "#77ff00",
  "#e1ff00",
  "#ffa600",
  "#ff7300",
  "#ff3700",
  "#ff1100",
];

function randomTitleColor() {
  const mainDiv = document.querySelector(".title-container");
  const titleText = document.getElementsByTagName("span");

  mainDiv.addEventListener("mouseover", function () {
    for (i = 0; i <= titleText.length; i++) {
      titleText[i].style.color =
        color[Math.floor(Math.random() * color.length)];
    }
  });
}
