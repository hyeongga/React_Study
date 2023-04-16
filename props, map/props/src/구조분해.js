const myProfile = {
  nickName: "h662",
  age: 18,
  job: "student",
  isGenius: true,
};

const { nickName, age } = myProfile;

console.log(nickName); //구조분해 후 키 값만 가지고 출력가능
console.log(myProfile.job);
console.log(age);

// /*키값이 같아서 구조분해에 적합하지 않은경우
// : 새로운 이름으로 변경가능_ 근데 잘 사용하진 않음*/
// const h662 = {
//   nickName: "h662",
// };
// const h663 = {
//   nickName: "h663",
// };

// const { nickName } = h662;
// const { nickName: newNickName } = h663;

// console.log(newNickName);
