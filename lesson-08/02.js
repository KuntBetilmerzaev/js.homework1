/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты '🚀' и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */










        const startButton = document.getElementById('start');
        const cancelButton = document.getElementById('cancel');
        const countdownDisplay = document.getElementById('countdown');

        let isTimerStarted = false;
        let timerId;
        let countdownValue = 3;

        startButton.addEventListener('click', () => {
            if (isTimerStarted) return; // Если таймер уже запущен, ничего не делаем

            isTimerStarted = true;
            countdownValue = 3; // Сбрасываем значение обратного отсчета
            countdownDisplay.textContent = countdownValue; // Отображаем 3

            timerId = setInterval(() => {
                countdownValue--;
                countdownDisplay.textContent = countdownValue;

                if (countdownValue <= 0) {
                    clearInterval(timerId); // Останавливаем таймер
                    countdownDisplay.textContent = '🚀'; // Отображаем эмодзи ракеты
                    isTimerStarted = false; // Разрешаем повторный запуск
                }
            }, 1000);
        });

        cancelButton.addEventListener('click', () => {
            if (!isTimerStarted) return; // Если таймер не запущен, ничего не делаем

            clearInterval(timerId); // Останавливаем таймер
            countdownDisplay.textContent = 'Отменено'; // Отображаем сообщение об отмене
            isTimerStarted = false; // Разрешаем повторный запуск
        });



// const startButton = document.getElementById('start')
// const cancelButton = document.getElementById('cancel')
// const countdownDisplay = document.getElementById('countdown')

// let isTimerStarted = false
// let timerId

// startButton.addEventListener('click', () => {
//   if (isTimerStarted) {
//     return; // Если таймер уже запущен, ничего не делаем
//   }
//   let counter = 3
//   isTimerStarted = true; // Флаг, показывающий, что таймер запущен

//   timerId = setInterval(() => {
//     countdownDisplay.textContent = counter
//     if (counter > 0) {
//       counter--
//     } else {
//       countdownDisplay.textContent = '🚀'
//       clearInterval(timerId)
//       isTimerStarted
//     }
//   }, 1000)
  
// })



// function stopCountdown() {
//   if (timerId) {
//       clearInterval(timerId); 
//       countdownDisplay.textContent = 'Отменено'; 
//       isTimerStarted = false; 
//   }
// }

// cancelButton.addEventListener('click', stopCountdown);





// const startButton = document.getElementById('start');
// const cancelButton = document.getElementById('cancel');
// const countdownDisplay = document.getElementById('countdown');

// let isTimerStarted = false;
// let timerId;

// startButton.addEventListener('click', () => {
//   if (isTimerStarted) {
//     return; // Если таймер уже запущен, ничего не делаем
//   }
  
//   isTimerStarted = true; // Флаг, показывающий, что таймер запущен
//   let counter = 3;

//   timerId = setInterval(() => {
//     countdownDisplay.textContent = counter;
//     if (counter > 0) {
//       counter--;
//     } else {
//       countdownDisplay.textContent = '🚀';
//       clearInterval(timerId);
//       isTimerStarted = false; // Таймер завершил работу, сбрасываем флаг
//     }
//   }, 1000);
// });

// function stopCountdown() {
//   if (timerId) {
//     clearInterval(timerId); // Останавливаем таймер
//     countdownDisplay.textContent = 'Отменено'; // Показываем, что отсчёт отменён
//     isTimerStarted = false; // Отмечаем, что таймер остановлен
//   }
// }

// cancelButton.addEventListener('click', stopCountdown);