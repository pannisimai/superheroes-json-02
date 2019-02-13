var header = document.querySelector("header");
var section = document.querySelector("section");

let requestUrl =
  "https://gist.githubusercontent.com/LeandroDCI/697427913933937f714dc9c4e728d1c7/raw/ce065f1a72d937eade74e5523d68d834ec2b5304/Heroes.json";

let request = new XMLHttpRequest();
request.open("GET", requestUrl);
request.responseType = "json";
request.send();

request.onload = function() {
  let superHeroes = request.response;
  console.log(superHeroes);
  showHeroes(superHeroes);
};

//mapping
function showHeroes(heroes) {
  const content = heroes
    .map(function(hero) {
      const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
      } = hero;
      const charArr = characters.split(","); // character string -> array
      const charList = charArr.map(character => `<li>${character}</li>`); //

      const charReverse = charList.join("");
      console.log(charReverse);
      return `
      <div> 
    <h2 class="name">${superhero}</h2>
    <hr>
    <p>Created by: ${publisher}</p>
    <p>Alterego: ${alter_ego}</p>
    <p>First appearance: ${first_appearance}</p> 
    <hr>
    <p>Characters: <ul>${charReverse}</ul></p>
      </div>`;
    })
    .join(" ");
  section.innerHTML = content;
}
