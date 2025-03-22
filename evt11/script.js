// получение элементов с классами 
var numberHours = document.querySelector(".number_hours");
var secondsBar = document.querySelector(".seconds_bar");

// создаем два массива: один для чисел на часах numberElement, а другой для делений секунд barElement
var numberElement = [];
var barElement = [];

// создание чисел на часах, заполнение массива числами до 12, логично
for (let i = 1; i <= 12; i++) {
  // генерируем строки HTML и добавляем их в numberElement.  элемент это span, к которому добавлен стиль --index для позиционирования
  numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}
// добавляет все сгенерированные элементы в элемент .number_hours на странице
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
console.log(numberHours);

// создание делений секундной шкалы
for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i}"><p></p></span>`);
}
secondsBar.insertAdjacentHTML("afterbegin", barElement.join(""));
console.log(secondsBar);

const handHours = document.querySelector(".hand.hour");
const handMinutes = document.querySelector(".hand.minute");
const handSeconds = document.querySelector(".hand.second");

function getCurrentTime() {
  let date = new Date();
  let curHours = date.getHours();
  let curMinutes = date.getMinutes();
  let curSeconds = date.getSeconds();

  // 12 hours = 360deg, 1 hour = 360 / 12 = 30deg
  // 1 hour = 30deg that means 60 min = 30deg, 1 min = 30 / 60 = 0.5 or 1/2 deg
  // formula for hours is (hours * 30 + minutes / 2)

  handHours.style.transform = `rotate(${curHours * 30 + curMinutes / 2}deg)`;

  // 60 minutes = 360deg, 1 min = 360 / 60 = 6deg
  handMinutes.style.transform = `rotate(${curMinutes * 6}deg)`;

  // 60 seconds = 360deg, 1 sec = 360 / 60 = 6deg
  handSeconds.style.transform = `rotate(${curSeconds * 6}deg)`;
}

// инициализация времени 
getCurrentTime();

// вызов getCurrentTime для обновы сек в реальном временни
setInterval(getCurrentTime, 1000) // 1000ms = 1s