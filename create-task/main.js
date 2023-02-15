import "./style.css";
import { setupCounter } from "./counter.js";

const apiEntry = "https://www.colourlovers.com/api/colors/random";
console.log(fetch(apiEntry));

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

const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
  const quote = await fetchData(apiEntry);
  apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML();
