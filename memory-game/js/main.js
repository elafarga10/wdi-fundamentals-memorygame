let array = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];
let cardOne = array[0];
cardsInPlay.push('cardOne');
console.log("User flipped queen")
let cardTwo = array[2];
cardsInPlay.push('cardTwo');
console.log("User flipped king");
if (cardsInPlay.length === 2){
	result = "true";
} if (cardOne === cardTwo){
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}
