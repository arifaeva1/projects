const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


const apiurl ="https://api.quotable.io/random" ;


async function getQuote(){
    const response = await fetch (apiurl);
    const data= await response.json();
    const quoteContent= data.content;
    const quoteAuthor= data.author;
    quoteEl.innerText=quoteContent;
    authorEl.innerText = "~"+ quoteAuthor;
console.log(data);

}


btnEl.addEventListener("click",getQuote);