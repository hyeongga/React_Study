//Filter 함수 개념 (배열)
const fruits = ["apple", "lemon", "orange", "melon", "kiwi"];
console.log(fruits);

const moreThanFiveLetters = fruits.filter((v, i) => {
  return v.length >= 5;
});

console.log(moreThanFiveLetters);
//--------------------------------------------------------------
//Filter 함수 (객체) _ map함수와 비교
const foods = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "potato" },
  { type: "fruit", name: "kiwi" },
  { type: "vegetable", name: "tomotp" },
  { type: "fruit", name: "orange" },
];

const onlyFruits = foods.filter((v, i) => {
  return v.type === "fruit";
});

const mapFruits = foods.map((v, i) => {
  if (v.type === "fruit") {
    return v;
  }
});
console.log(onlyFruits);
console.log(mapFruits);
