let dice1 = Math.floor(Math.random() * 6)
let dice2 = Math.floor(Math.random() * 6)
let isWinningDouble // your code

alert('На первом кубике выпало: ' + (dice1 + 1))
alert('На втором кубике выпало: ' + (dice2 + 1))

if (dice1 === dice2 && (+dice1 + 1) > 3 && (+dice2 + 1) > 3) {
    alert('You win')
    isWinningDouble = true
} else {
    alert('You lose')
    isWinningDouble = false
}


