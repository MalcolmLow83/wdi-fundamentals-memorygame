var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
}
];


var cardsInPlay = [];

function flipCard() {
cardId = this.getAttribute('data-id');

//Display flipped card function
console.log("User flipped " + cards[cardId].rank);

//store cards value into cardsInPlay array
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

//Check if 2 cards matches
if (cardsInPlay.length < 2) {
    console.log("Flip your second card")
} else if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
} else {
    alert("Sorry, try again")
}
};

function createboard() {
    for (var i = 0; i <= 3; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id',i);
        document.getElementById('game-board').appendChild(cardElement);

    }
};

document.getElementById('game-board').addEventListener('click', flipCard);

createboard();