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

function flipCard(cardId) {

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
    console.log("You found a match!")
    console.log(cardsInPlay[0])

} else {
    alert("Sorry, try again")
}
};

flipCard(0);
flipCard(2);

/*
//Check if 2 cards matches
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!")

} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
    console.log("Sorry, try again")

} else {
    console.log("Flip your second card")
}
*/