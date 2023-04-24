'use strict'

let num = 50;
//----------- WHILE -----------//
//пока наше условие не выполненно - выполняй такие-то действия
// while(num <= 55) {
//   console.log(num);
//   num++;
// };

//----------- DO WHILE -----------//
//сделай что-то, потом проверь условие
// do {
//   console.log(num);
//   num++;
// } 
// while (num <= 55);

//----------- FOR -----------//
// for(let i = 1;  i < 8; i++) {
//   console.log(num);
//   num++
// };


//----------- FOR with BREAK -----------//
for(let i = 1;  i < 10; i++) {
  if (i === 6) { // если i равно 6 - прерви выполнение цикла
    break;
  }
  console.log(i);
};


//----------- FOR with CONTINUE -----------//
for(let i = 1;  i < 10; i++) {
  if (i === 6) { // если i равно 6 - пропусти шаг, но не перывай цикл
    continue;
  }
  console.log(i);
};



//----------- ВЛОЖЕННОСТЬ циклов -----------//


for(let i = 0; i < 3; i++) {
  console.log(i);
  for(let j = 0; j < 3; j++) {
    console.log(j);
  };
};
//i,j,j,j,   i,j,j,j,   i,j,j,j.
//0,0,1,2,   1,0,1,2,   2,0,1,2.

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for(let i = 1; i < length; i++) {
  
  for(let j = 0; j < i; j++) {
    result += "*";
  }

  result += '\n'; // перенос строки
};

console.log(result);


//----------- ПРЕРЫВАНИЕ через вложенный цикл -----------//
//--МЕТКИ--//

metka:for(let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for(let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for(let k = 0; k < 5; k++) {
      if(k === 3) continue metka;
      console.log(`Third level: ${k}`);
    };
  };
};
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1
// Third level: 2
// First level: 1
// Second level: 0
// Third level: 0
// Third level: 1
// Third level: 2
// First level: 2
// Second level: 0
// Third level: 0
// Third level: 1
// Third level: 2

metka:for(let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for(let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for(let k = 0; k < 5; k++) {
      if(k === 3) break metka;
      console.log(`Third level: ${k}`);
    };
  };
};
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1
// Third level: 2


//--------------ЗАДАЧИ-------------//

/**1
 * При помощи цикла выведите числа от 5 до 10 в консоль. 
 * 5 и 10 включительно. 
 * Цикл можно использовать любой
 **/
for( let i = 5; i <= 10; i++) {
  console.log(i);
};


/**2
 * При помощи цикла for вывести числа от 20 до 10 в консоль. 
 * В обратном порядке (20, 19, 18...). 
 * Когда цикл дойдет до числа 13 - остановить весь цикл
 **/
for(let j = 20; j >= 10; j--) {
  if(j === 13) break;
  console.log(j);
};


/**3
 * При помощи цикла for выведите чётные числа 
 * от 2 до 10 включительно
 */
for(let k = 2; k <= 10; k++) {
  if(k % 2 !== 0) {
    console.log(k);
  };
};


/**4
 * Перепишите цикл  for на вариант с while.
 *  Результат должен остаться точно таким же.
 */

//  for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }



/**5
 * Заполните массив цифрами от 5 до 10 включительно. 
 * Помните, что элементы массива можно сформировать так же, 
 * как и обращаться к ним: arr[0]
 */

let arr = [];
for(let i = 5; i <= 10; i++) {
  arr[i - 5] = i;
};
console.log(arr);

