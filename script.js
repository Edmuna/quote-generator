const quoteText = document.querySelector(".quote-text");
const copyBtn = document.querySelector(".copy-btn");
const newBtn = document.querySelector(".new-quote");
const author = document.querySelector(".author-name");
const speech = document.querySelector(".speech-btn");
const publish = document.querySelector(".publish-btn");
const synth = speechSynthesis;

const url = "https://quotes15.p.rapidapi.com/quotes/random/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "77b6f4c49dmsh2cd2705a32ecd64p125921jsnd8e83fe39e96",
    "X-RapitAPI-Host": "quotes15.p.rapidapi.com",
  },
};

async function fetchQuote() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    const aboutAuthor = result.originator.description;
    const authorName = result.originator.name;
    const quote = result.content;
    // displayQuote(quote);
    quoteText.innerHTML = quote;
    author.innerHTML = authorName;
  } catch (err) {
    console.error(err);
  }
}

// function displayQuote(text) {
//   const maxLength = 100;

//   if (text.length <= maxLength) {
//     quoteText.textContent = text;
//     quoteText.style.display = "block";
//   } else {
//     const truncatedQuote = text.substring(0, maxLength - 3) + "...";
//     quoteText.textContent = truncatedQuote;
//     quoteText.style.display = "block";
//   }
// }

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.textContent);
  console.log("Copied!");
});

speech.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(quoteText.innerHTML);
  synth.speak(utterance);
});

newBtn.addEventListener("click", fetchQuote);
publish.disabled = true;
