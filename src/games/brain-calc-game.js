import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const taskText = 'What is the result of the expression?';
const operators = ['+', '-', '*', '/'];
const calculate = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a / b;
  }
};

const getGameData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const rightAnswer = calculate(a, operator, b);
  return [question, String(rightAnswer)];
};

const startBrainCalcGame = () => startGame(taskText, getGameData);

export default startBrainCalcGame;
