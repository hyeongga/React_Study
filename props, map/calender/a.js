// const fruits = ["apple", "banana", "orange", "kiwi", "melon"];

// // console.log(fruits.length);

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// //map 함수
// fruits.map((v, i) => {
//   console.log(`${i + 1}번째 과일: ${v}`);
// });

const array = [1, 2, 3, 4];

console.log(array);

const squareArray = array.map((v) => v * v); //map함수 사용

const squareArray2 = []; //for문 사용
for (let i = 0; i < array.length; i++) {
  squareArray2.push(array[i] * array[i]);
}

console.log(squareArray);
console.log(squareArray2);
