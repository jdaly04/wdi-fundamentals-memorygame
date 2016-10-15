var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

if (cardTwo === cardFour || cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardThree === cardFour) {
  alert ('You found a match!')
} else {
  alert ('Sorry, try again!')
}
