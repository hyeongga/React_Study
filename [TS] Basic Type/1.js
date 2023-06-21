//1. 기본 타입(number, boolean, string)
var myName = "h662";
// myName = 12; 타입이 달라 컴파일 에러 발생
var age = 99;
var isRich = false;
//2. null / undefined
var nullable = null;
var undefinedable = undefined;
/* 0,"",flase는 비어있는 상태가 아니라 에러 발생
nullable = 0;
undefinedable = "";
*/
//3.any
var Name = "h662";
console.log(myName);
// any는 어떠한 타입도 수용가능
Name = 123;
Name = false;
//4. 유니온
var nameOrAge = "h662";
nameOrAge = 99;
/* string, number외 다른 값은 입력 불가
nameOrAge = false;
*/
//5. array
var leaders = ["a", "b", "c", "d", "e"];
leaders[6] = 663;
//6. object
var myInfo = [
    { name: "h662", age: 99, isRich: true },
    { name: "시온", age: 10, isRich: false },
    { name: "백기", age: 20, isRich: false },
];
//7. function
function Add(a, b) {
    return a + b;
}
//반환값이 없는 형태의 함수에는 void
function Add2(a, b) {
    console.log(a + b);
}
Add2(1, 2);
