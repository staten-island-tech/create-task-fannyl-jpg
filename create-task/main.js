/* import "./style.css"; */
import { setupCounter } from "./counter.js";
import { HttpProxy } from "vite";

/* const apiEntry =
  "https://metmuseum.org/art/collection/search#!?q=test&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20";
console.log(fetch(apiEntry));
const form = document.querySelector(".search-form");
const imageResults = document.querySelector(".image-container");

fetch(apiEntry)
  .then((response) => response.json())
  .then((data) => console.log(data));

async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);

async function fetchText() {
  let response = await fetch("/readme.txt");

  console.log(response.status);
  console.log(response.statusText);

  if (response.status === 200) {
    let data = await response.text();
  }
}

fetchText();

let response = await fetch("/non-existence.txt");

console.log(response.status);
console.log(response.statusText);

async function load_pic() {
  const url =
    "https://metmuseum.org/art/collection/search#!?q=test&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20";

  const options = {
    method: "GET",
  };

  let response = await fetch(url, options);

  if (response.status === 200) {
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);

    const image = document.createElement("img");
    image.src = imageObjectURL;

    const container = document.getElementById("your-container");
    container.append(image);
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}
 */

/* fetch(
  "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayCocktail(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");

  const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";

  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);
  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});
  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }
} */

const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";

async function getapi(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "";
}

function show(data) {
  let tab = `<tr>
        <th>Name</th>
        <th>Office</th>
        <th>Position</th>
        <th>Salary</th>
       </tr>`;

  for (let r of data.list) {
    tab += `<tr> 
  <td>${r.name} </td>
  <td>${r.office}</td>
  <td>${r.position}</td> 
  <td>${r.salary}</td>          
</tr>`;
  }
  document.getElementById("employees").innerHTML = tab;
}
