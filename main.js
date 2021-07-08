/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//Variables for each Dice (Single 6, Doubles 6's, Single 12 and 20)+ the reset button. ==========================

const dice6 = document.querySelector('#d6-roll');
const doubleDiceOne = document.querySelector('#double-d6-roll-1');
const doubleDiceTwo = document.querySelector('#double-d6-roll-2');
const dice12 = document.querySelector('#d12-roll');
const dice20 = document.querySelector('#d20-roll');
const resetAllButton = document.querySelector('#reset-button');


//Variables for each Mean, Median and Mode =====================================================================

const dice6Mean = document.querySelector('#d6-rolls-mean');
const dice6Median = document.querySelector('#d6-rolls-median');
const dice6Mode = document.querySelector('#d6-rolls-mode');
const doubledice6Mean = document.querySelector('#double-d6-rolls-mean');
const doubledice6Median = document.querySelector('#double-d6-rolls-median');
const doubledice6Mode = document.querySelector('#double-d6-rolls-mode');
const dice12Mean = document.querySelector('#d12-rolls-mean');
const dice12Median = document.querySelector('#d12-rolls-median');
const dice12Mode = document.querySelector('#d12-rolls-mode');
const dice20Mean = document.querySelector('#d20-rolls-mean');
const dice20Median = document.querySelector('#d20-rolls-median');
const dice20Mode = document.querySelector('#d20-rolls-mode');


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

const clickDice6 = function() {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);
  const mode = getMode(sixes);
  dice6.src = `./images/d6/${roll}.png`; //${} basically the same as => ( "text" + # + ".png")
  dice6Mean.innerText = mean;
  dice6Median.innerText = median;
  dice6Mode.innerText = mode;
}

const clickDoubleDice6 = function() {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);
  doubleSixes.push(roll1 + roll2);
  const median = getMedian(doubleSixes);
  const mean = getMean(doubleSixes);
  const mode = getMode(doubleSixes);
  doubleDiceOne.src = `./images/d6/${roll1}.png`; 
  doubleDiceTwo.src = `./images/d6/${roll2}.png`;
  doubledice6Mean.innerText = mean;
  doubledice6Median.innerText = median;
  doubledice6Mode.innerText = mode;
}

const clickDice12 = function() {
  const roll = getRandomNumber(12);
  twelves.push(roll);
  const median = getMedian(twelves);
  const mean = getMean(twelves);
  const mode = getMode(twelves);
  dice12.src = `./images/numbers/${roll}.png`;
  dice12Mean.innerText = mean;
  dice12Median.innerText = median;
  dice12Mode.innerText = mode;
}

const clickDice20 = function() {
  const roll = getRandomNumber(20);
  twenties.push(roll);
  const median = getMedian(twenties);
  const mean = getMean(twenties);
  const mode = getMode(twenties);
  dice20.src = `./images/numbers/${roll}.png`;
  dice20Mean.innerText = mean;
  dice20Median.innerText = median;
  dice20Mode.innerText = mode;
}


/******************
 * RESET FUNCTION *
 ******************/

const resetAll = function() {
  sixes.splice(0)
  doubleSixes.splice(0)
  twelves.splice(0)
  twenties.splice(0)

  dice6.src = './images/start/d6.png';
  dice6.style.src = './images/start/d6.png';
  doubleDiceOne.src = './images/start/d6.png';
  doubleDiceTwo.src = './images/start/d6.png';
  dice12.src = './images/start/d12.jpeg';
  dice20.src = './images/start/d20.jpg';

  dice6Mean.innerText = 'NA';
  dice6Median.innerText = 'NA';
  dice6Mode.innerText = 'NA';
  doubledice6Mean.innerText = 'NA';
  doubledice6Median.innerText = 'NA';
  doubledice6Mode.innerText = 'NA';
  dice12Mean.innerText = 'NA';
  dice12Median.innerText = 'NA';
  dice12Mode.innerText = 'NA';
  dice20Mean.innerText = 'NA';
  dice20Median.innerText = 'NA';
  dice20Mode.innerText = 'NA';
}

/*******************
 * EVENT LISTENERS *
 *******************/

dice6.addEventListener('click', clickDice6);
doubleDiceOne.addEventListener('click', clickDoubleDice6);
doubleDiceTwo.addEventListener('click', clickDoubleDice6);
dice12.addEventListener('click', clickDice12);
dice20.addEventListener('click', clickDice20);
resetAllButton.addEventListener('click', resetAll);

/****************
 * MATH SECTION *
 ****************/

//Get Mean Function =================================================================================

const getMean = function(rolls) {
  let sum = 0;
  for (const roll of rolls) {
    sum += roll;
  }
  return (sum / rolls.length).toFixed(2);
}

//Get Median Function ================================================================================

const getMedian = function(rolls) {
  const sorted = sortByNumber(rolls);
  console.log(sorted);
  const midPoint = Math.floor(sorted.length / 2);
  console.log(midPoint);
  if (sorted.length % 2 === 0) {
    console.log(((sorted[midPoint] + sorted[midPoint - 1]) / 2).toFixed(2));
    return ((sorted[midPoint] + sorted[midPoint - 1]) / 2).toFixed(2);
  } else {
    // console.log(sorted[midPoint].toFixed(2));
    return sorted[midPoint].toFixed(2);
  }
}

//Get Mode Function =================================================================================

const getMode = function(rolls) {
  const counts = {};
  let mode = 'NA'
  for (const roll of rolls) {
    if (roll in counts) {
      counts[roll]++;
    } else {
      counts[roll] = 1;
    }
    if (counts[mode] === undefined || counts[roll] > counts[mode]) {
      mode = roll;
    }
  }
  return mode;
}
resetAll();