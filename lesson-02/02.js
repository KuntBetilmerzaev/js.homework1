/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

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
}

































/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
*/
