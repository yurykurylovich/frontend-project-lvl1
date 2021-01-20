import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const taskText = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = gcd(firstNum, secondNum);
  return [question, String(rightAnswer)];
};

const startBrainGCDGame = () => startGame(taskText, getGameData);

export default startBrainGCDGame;
