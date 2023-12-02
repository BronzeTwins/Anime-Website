/*Sweet Alert*/
swal(
  "Enjoy listening to anime music :",
  "Play Track : Click on the card <br /> Stop Track : Hover out",
  "success"
);

/*javascript for tilting the cards*/
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true, // if it should have a "glare" effect
  "max-glare": 0.5, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
});

// It also supports NodeList
//   VanillaTilt.init(document.querySelectorAll(".card"));

/*adding audio functions on card click and hover out*/
function PlaySound(sound) {
  const thissound = document.getElementById(sound);
  thissound.play();
}

function StopSound(sound) {
  const thissound = document.getElementById(sound);
  thissound.pause();
  thissound.currentTime = 0;
}

function animeSearch() {
  // Declare variables
  const input = document.getElementById("anime_Search");
  const filter = input.value.toUpperCase();
  const animeSearchCard = document.querySelectorAll(".card");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < animeSearchCard.length; i++) {
    let animeResult = animeSearchCard[i].getElementsByTagName("h1")[0];
    let text = animeResult.innerHTML;
    if (text.toUpperCase().indexOf(filter) > -1) {
      animeSearchCard[i].style.display = "";
    } else {
      animeSearchCard[i].style.display = "none";
    }
  }
}
