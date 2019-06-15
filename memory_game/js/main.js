var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
var cardTwo;
var msg = "";

//store cards[0] value into cardOne
cardOne = cards[0];

//store cards[2] value into cardTwo
cardTwo = cards[2];

//store cardOne value into cardsInPlay[0]
cardsInPlay.push(cardOne);

//store cardOne value into cardsInPlay[1]
//cardsInPlay.push(cardTwo);

//Display cardsInPlay
alert("User flipped " + cardsInPlay[0] + " and " + cardsInPlay[1]);

//Check if 2 cards have been played
if (cardsInPlay.length === 2) {
    alert("User have played 2 cards");
} else {
    alert("User have not played 2 cards");
}

//Check if 2 cards matches
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
} else {
    alert("Sorry, try again")
}

/*
console.log("Up and running");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/