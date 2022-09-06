/** Call init() function in order to put the numbers in the html. */
window.addEventListener('load', init);

const cardsEl = document.getElementById('cards'),
  numbers = [];

/**
 * Shuffle an array method
 *
 * @param N/A
 * @WayToUse [...].shuffle()
 * @return a new shuffled Array
 */
Array.prototype.shuffle = function () {
  let array = this;
  return array.sort(() => Math.random() - 0.5);
};

/**
 * Sort an array of objects method
 *
 * @param field - 'STRING' which reperesent based on which property
 * of object you wanna sort the array for example: based on Age or Number
 * @WayToUse [...].sort('age')
 * @return a new sorted Array
 */
Array.prototype.sortByNumber = function (field) {
  let array = this;
  return array.sort((a, b) => a[field] - b[field]);
};
/** the first function that will called by window once it loaded,
 * it create Array of Objects like [{number:1, color:'#000}, ...,...] */
function init() {
  createArrayOfItems(9);
  sort();
}

/** generating a random number between two numbers
 *
 * @param min - Number
 * @param max - Number
 * @return a random number between min and max
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** generating Array of object based on quantity you provide
 *
 * @param quantity - Number
 *
 * @return N/A
 */
function createArrayOfItems(quantity) {
  const colors = ['#6F98A8', '#2B8EAD', '#bfbfbf', '#2F454E'];
  for (let i = 1; i <= quantity; i++) {
    numbers.push({
      number: i,
      color: colors[randomInteger(0, 3)],
    });
  }
}

/**
 * populate the html tag of cards from items from array
 * @param arr - Array
 *
 * @return N/A
 */
function populate(arr) {
  const cards = [];
  arr.forEach((item) => {
    cards.push(
      `<div class='card' style='--selectedColor: ${item.color}'>${item.number}</div>`
    );
  });
  cardsEl.innerHTML = cards.join(' ');
}

function shuffle() {
  populate(numbers.shuffle());
}

function sort() {
  populate(numbers.sortByNumber('number'));
}
