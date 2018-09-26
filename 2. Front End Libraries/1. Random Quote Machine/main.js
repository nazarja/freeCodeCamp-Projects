const colors = ['#647797', '#88adda', '#72cbdd', '#539c95', '#7bad54', '#f4b57f', '#f37c51', '#d79596', '#e7aecf', '#a3a4d2', '#a6a7d5'];
const text = document.querySelector('#text');
const author = document.querySelector('#author');
const background = document.querySelector('body');
const newQuoteButton = document.querySelector('#new-quote');
const p = document.querySelectorAll('p');
let prevColor = '';



    
// Change Background Color
function changeBackgroundColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    if (prevColor == randomColor ? changeBackgroundColor() : prevColor = randomColor);

    p.forEach(p => p.style.color = colors[randomColor]);
    background.style.background = colors[randomColor];
    newQuoteButton.style.background = colors[randomColor];
    
}




// Get a New Quote from Web API
const newQuote = document.querySelector('#new-quote');
function fetchQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
        .then(response => {
            return response.json();
        })
        .then(quote => {
            text.innerHTML = `<i class="fas fa-quote-left"></i> ${quote.quote} <i class="fas fa-quote-right"></i>`;
            author.innerHTML = ` - ${quote.author}`;
        })
        .catch(error => {
            console.log(error);
        })
}
newQuote.onclick = () => {
    changeBackgroundColor();
    fetchQuote();
}




// When Twitter Icon is Clicked
const tweet = document.querySelector('#tweet-quote');
function tweetIntent() {
    tweet.href = `https://twitter.com/intent/tweet?text=${text.innerText} ${author.innerText}`
    tweet.target = '_blank';
}
tweet.onclick = () => {
    tweetIntent();
}




/**
 * Initialize Page
 */
(function () {
    changeBackgroundColor();
    fetchQuote();
})();