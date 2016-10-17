var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
var cards = ('queen', 'king', 'queen', 'king');
//if (cardTwo === cardFour || cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardThree === cardFour) {
//  alert ('You found a match!')
//} else {
  //alert ('Sorry, try again!')
//}
var board = document.getElementById('board-game');

function createCard() {
  for (var i=0; i<cards.length; i++) {
    var makeCardElement = document.createElement('div');
makeCardElement.className = 'card';
board.appendChild(makeCardElement);
}
}
createCard(4);
