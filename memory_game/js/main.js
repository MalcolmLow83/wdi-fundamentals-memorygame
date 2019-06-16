var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function flipCard(cardId) {

//Display flipped card function
console.log("User flipped " + cards[cardId]);

//store cards value into cardsInPlay array
cardsInPlay.push(cardId);

//Check if 2 cards matches
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!")

} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
    console.log("Sorry, try again")

} else {
    console.log("Only played 1 card")
}
};

flipCard(0);
flipCard(2);


/*
//Check if 2 cards have been played
if (cardsInPlay.length === 2) {
    console.log("User have played 2 cards");
} else {
    console.log("User have not played 2 cards");
}
*/