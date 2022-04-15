const generateButton = document.getElementById("generate");
const allQuotes = document.querySelector("#all-quotes");
const api = "https://api.quotable.io/random";

const createQuoteElement = (quoteBox, cardElement, name) => {
    const elementCreated = document.createElement("h4");
    if (name === "Hashtags") {
      const hashTagsAdded = cardElement.map((e) => `#${e}`).join(" ")
      elementCreated.textContent = `${name}: ${hashTagsAdded}`;
    } else {
      elementCreated.textContent = `${name}: ${cardElement}`;
    }
    quoteBox.appendChild(elementCreated);
};

const createQuoteBox = (data) => {
    const quoteBox = document.createElement("div");
    quoteBox.classList.add("quote-box");
    createQuoteElement(quoteBox, data.content, "Quote");
    createQuoteElement(quoteBox, data.dateAdded, "Date Added");
    createQuoteElement(quoteBox, data.tags, "Hashtags");

    allQuotes.insertAdjacentElement('afterbegin', quoteBox);  
}

function fetchAndParse() {
  fetch("https://api.quotable.io/random")
    .then((resp) => resp.json())
    .then((data) => {
    createQuoteBox(data);
  });
}

generateButton.addEventListener("click", fetchAndParse);

