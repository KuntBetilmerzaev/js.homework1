
const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;


const isWinningDouble = (dice1 === dice2) && (dice1 > 3);


console.log(`Кубик 1: ${dice1}`);
console.log(`Кубик 2: ${dice2}`);
console.log(`Выигрышный дубль: ${isWinningDouble}`);



