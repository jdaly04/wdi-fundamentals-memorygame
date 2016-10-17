var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];
//if (cardTwo === cardFour || cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardThree === cardFour) {
//  alert ('You found a match!')
//} else {
  //alert ('Sorry, try again!')
//}
var board = document.getElementById('game-board');

function createCard() {
  for (var i=0; i<cards.length; i++) {
    var makeCardElement = document.createElement('div');
makeCardElement.className = 'card';
makeCardElement.setAttribute('data-card', cards[i]);
makeCardElement.addEventListener('click', isTwoCards);
board.appendChild(makeCardElement);
  }
}
function isTwoCards() {
   cardsInPlay.push(this.getAttribute('data-card'));
   console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	}
  if (cardsInPlay.length === 2) {
     isMatch(cardsInPlay);
     cardsInPlay = [];
   }
 }
  function isMatch(cards) {
    if (cards[0] === cards[1]) {
      alert ('You found a match!');
      } else {
      alert ('Sorry, try again!');
    }
  }
  createCard(4);
