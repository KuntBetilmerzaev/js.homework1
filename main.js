
let dice1 = Math.floor(Math.random() * 6)
let dice2 = Math.floor(Math.random() * 6)
let isWinningDouble // your code

console.log('На первом кубике выпало: ' + (dice1 + 1))
console.log('На втором кубике выпало: ' + (dice2 + 1))

if (dice1 === dice2 && (+dice1 + 1) > 3 && (+dice2 + 1) > 3) {
    console.log('You win');
    isWinningDouble = true
} else {
    console.log('You lose')
    isWinningDouble = false
}

