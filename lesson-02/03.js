/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code

if (49 >= score) {
    grade = 'F'
    console.log(grade)
} else if (score >= 50 && 69 >= score) {
    grade = 'D' 
    console.log(grade)
} else if (score >= 70 && 79 >= score) {
    grade = 'C'  
    console.log(grade)
} else if (score >= 80 && 89 >= score) {
    grade = 'B'
    console.log(grade) 
} else if (score >= 90 && 100 >= score) {
    grade = 'A' 
    console.log(grade)
} 