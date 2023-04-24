'use strict'

const num = 50;

switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('Верно!');
    break;
  default: 
    console.log('Не в этот раз!');
    break;
}











//------ Логические операторы --------//

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
//   console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries)

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'jlhgoiug'); // 0


// if(hamburger === 3 && cola === 1 && fries === 1) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим')
// }


// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if(hamburger || cola || fries) {
//   console.log('Все довольны!');
// } else {
//   console.log('Мы уходим')
// };

// console.log(hamburger || cola || fries);

//---------------------------------//

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport)

//---------------------------------//

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим');
};

console.log(hamburger === 3 && cola === 2);
console.log(fries === 3 && nuggets);

//---------------------------------//

console.log( 5 === 5 && 3 > 1 || 5);

//---------------------------------//

