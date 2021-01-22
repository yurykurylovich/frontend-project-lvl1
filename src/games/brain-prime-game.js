import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGameData = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrimeGame = () => startGame(taskText, getGameData);

export default startBrainPrimeGame;
