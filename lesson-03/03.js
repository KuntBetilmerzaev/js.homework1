// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    let maxNum = Math.max(number1, number2, number3)
    return maxNum
}

console.log(findLargest(5, 4, 3))
