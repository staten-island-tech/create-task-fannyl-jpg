import "./style.css";
import { setupCounter } from "./counter.js";
import { HttpProxy } from "vite";

const apiEntry =
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

async function load_pic() {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir";

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
