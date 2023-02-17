import "./style.css";
import { setupCounter } from "./counter.js";
import { HttpProxy } from "vite";
/* 
const apiEntry = "https://www.colourlovers.com/api/colors/random";
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
fetchData(apiEntry);*/


fetch("http://colormind.io/api/", {
  method: "POST",
  body: JSON.stringify({
    model: "default",
    input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
  }),
})
  .then((res) => res.json())
  .then(console.log);



const apiEntry = "https://www.colourlovers.com/api/colors/random";
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
fetchData(apiEntry);*/
