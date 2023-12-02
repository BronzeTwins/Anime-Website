/*creating anime list to randomly pick them later*/

const animeList = [
  "Fairy Tail",
  "One Piece",
  "Hunter x Hunter",
  "Pokemon",
  "Bleach",
  "Demon Slayer",
  "Black Clover",
  "SAO",
  "Attack on Titans",
  "Overlord",
  "My Hero Academia",
  "One Punch Man",
  "Naruto",
  "Dragon Ball Z",
  "Haikyuu",
  "Kuroko no Basuke",
];
const animeLetters = "abcdefghijklmnopqrstuvwxzy0123456789!@#$%^&*";

/* creating random color list for raindrop */

// const animeColor = [
//   "#22ff00",
//   "#00ffee",
//   "#2600ff",
//   "#9000ff",
//   "#ff005d",
//   "#eaff00",
// ];

/* function to pick random anime title for each raindrop */
function randomAnime() {
  let animeCloudHover = document.querySelector(".cloud:hover");
  let randomAnimeList = animeList[Math.floor(Math.random() * animeList.length)];
  let randomAnimeLetter =
    animeLetters[Math.floor(Math.random() * animeLetters.length)];
  if (animeCloudHover != null) {
    return randomAnimeList;
  } else {
    return randomAnimeLetter;
  }
}
/* function to pick random color for each raindrop */

// function randomColor() {
//   let randomColor = animeColor[Math.floor(Math.random() * animeColor.length)];
//   return randomColor;
// }

function rain() {
  /* grabbing the div cloud and creating an element div to insert it in cloud element */
  let animeCloud = document.querySelector(".cloud");
  let rainDrop = document.createElement("div");

  /* randomize the anime raindrop position, font-size, and animation duration  */
  let animePosition = Math.floor(Math.random() * 170);
  let animeSize = Math.random() * 0.5;
  let animeDuration = Math.random() * 1;

  /*adding class anime-name to each raindrop and add each div to the cloud div */
  rainDrop.classList.add("anime-name");
  animeCloud.appendChild(rainDrop);

  /* changing each raindrop text to the random anime title picked by randomAnime() function */
  rainDrop.innerText = randomAnime();

  /* changing each raindrop color to the random color picked by randomColor() function */
  //   rainDrop.style.color = randomColor();

  /* adding the anime raindrop position, font-size, and animation duration picked by Math function to raindrop style */
  rainDrop.style.left = animePosition + "px";
  rainDrop.style.fontSize = 0.5 + animeSize + "em";
  rainDrop.style.animationDuration = 1 + animeDuration + "s";

  /* adding a timeout function for 2 seconds to remove one of the raindrop children from cloud div or it will be difficult for the browser to render them all */
  setTimeout(function () {
    animeCloud.removeChild(rainDrop);
  }, 2000);
}

/* adding an interval of 0.2 seconds to run the rain() function so there are multiple raindrops created */

setInterval(function () {
  rain();
}, 200);
