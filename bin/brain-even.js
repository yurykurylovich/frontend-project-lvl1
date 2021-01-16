#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/index.js'

const yes = 'yes';
const no = 'no';
const userName = greeting();

const isEven = (number) => number % 2 === 0;

const getRandomValue = () => {
  const max = 40;
  return Math.floor(Math.random() * (max + 1));
}

const isRightAnswer = (guess, currAnswerNumber) => {
  switch (guess) {
    case yes:
      return isEven(currAnswerNumber) === true;
    case no:
      return isEven(currAnswerNumber) === false;
    default:
      return null;
  }
}

export const brainEvenGame = (userName, amountOfRounds) => {
  console.log(`Answer ${yes} if the number is even, otherwise answer ${no}.`);
  
  while (amountOfRounds !== 0) {
    const currAnswerNumber = getRandomValue();
    console.log(`Question: ${currAnswerNumber}`);
    const answer = readlineSync.question('Answer: ');

    if (isRightAnswer(answer, currAnswerNumber)) {
      console.log('Correct!');
      amountOfRounds -= 1;
    } else {
      console.log(`${yes} is wrong answer ;(. Correct answer was ${no}\nLet's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
}
