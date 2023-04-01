// Первое задание
let arr = ['морген', 'николай', 'александр', 'юлдуз', 'тимати'];
let longestName = arr.reduce((item, arr) => (arr.length > item.length ? arr : item));
console.log(longestName);

//Второе 
let num = [2,4,1,4,7,3,2,7,9,3,2]
let even = num. filter (num => num % 2 === 0);
let odd = num. filter (num => num % 2 !== 0);
console.log(even, odd);


//прошлое задание
alert('прошлое задание пишем индекс')
let index = prompt();

let ar = ['Алексей', 'Картошка', 'Маргарита', 'Моргенштерн', 'Моника'];

if (ar [index]) {
  ar.splice (index, 1);
  console.log(`${ar} Удален элемент с индексом ${index}`);
} else {
  console.log(`Нет элементов по индексу ${index}`);
}

// 2
// let indeX = +prompt();
// let arR = [1, 2, null, 'привет', 24, 'мир', undefined, false, 'error', 22];

// let numberCount = 0;
// arr.forEach((arR) => {
//   if (arR === '5') {
//     numberCount++;
//   }
// });

// if (numberCount > 5) {
//   console.log('правильно');
// } else {
//   console.log('неправильно');
// }

// 3 

let arR = [[{a: {price: 20}}, {a: {price: 35}}, {a: {price: 44}}]];
let price = 0;
for (let i = 0; i < arR.length; i++) {
    for (let j = 0; j < arR[i].length; j++) {
        price += arR[i][j].a.price;
    }
}
console.log(price);
  