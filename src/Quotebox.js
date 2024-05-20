import React, { useEffect, useState } from "react";


function Quotebox (){
const [randomquote, setRandomQuote] = useState({
    quote: "Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.",
    author: "Aldous Huxley"
})

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

useEffect(()=>{
const chosenColor = pickAtRandom(colors)
document.body.style.backgroundColor = chosenColor;
document.body.style.color = chosenColor 
}, [randomquote])

function pickAtRandom(arr){
var randomNumber = Math.floor(Math.random() * arr.length)
return arr[randomNumber]
}

function changeQuote(){   
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
        const {quotes} = data
        const randomQuote = pickAtRandom(quotes)
        const {quote, author} = randomQuote;
        setRandomQuote({quote: quote, author: author})
    })
    
}

function tweet(url, text) {
    url = encodeURIComponent(url);
    text = encodeURIComponent(text);
    window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + "&url=" + url, "_blank");
}


    return (
        <div id ="quote-box">
        <h1>Random Quote Machine</h1>
    <blockquote> 
    <q id="text">
        {randomquote.quote}
      </q>  
      <footer id="author"> <span>—{randomquote.author}</span></footer>
    </blockquote>
    <div className="btn-div">
    <button><a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" onClick={()=>{
        tweet("twitter.com/intent/tweet", randomquote)
    }}></a>Tweet Quote</button>
    <button id="new-quote" onClick={changeQuote}>New Quote</button>
    </div>
  </div>
           )
}

// 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

export default Quotebox;
