/* Getting Anime API from animechan.xyz */
const apiURL = "https://animechan.xyz/api/random";

/* Grabbing all the necessary anime elements from html */
const anime = document.getElementById("anime");
const animeQuote = document.getElementById("animeQuote");
const animeCharacter = document.getElementById("animeCharacter");

/* Creating an asynchronous function that waits for the result from animechan.xyz and grab it then insert them it in the anime elements */
async function getQuote(url) {
  const response = await fetch(url);
  let animeData = await response.json();
  anime.innerHTML = animeData.anime;
  animeQuote.innerHTML = ' " ' + animeData.quote + ' " ';
  animeCharacter.innerHTML = "-- " + animeData.character;
}

getQuote(apiURL);

/* Creating a function tweet that open twitter share page with anime information */

function tweet() {
  window
    .open(
      "https://twitter.com/intent/tweet?text=" +
        anime.innerHTML +
        " : %0A  " +
        animeQuote.innerHTML +
        " %0A " +
        animeCharacter.innerHTML,
      "_blank"
    )
    .focus();
}
