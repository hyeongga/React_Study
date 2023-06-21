//1. 기본 타입(number, boolean, string)
let myName: string = "h662";
// myName = 12; 타입이 달라 컴파일 에러 발생
let age: number = 99;
let isRich: boolean = false;

//2. null / undefined
let nullable: null = null;
let undefinedable: undefined = undefined;
/* 0,"",flase는 비어있는 상태가 아니라 에러 발생
nullable = 0;
undefinedable = "";
*/

//3.any
let Name: any = "h662";
console.log(myName);
// any는 어떠한 타입도 수용가능
Name = 123;
Name = false;

//4. 유니온
let nameOrAge: string | number = "h662";
nameOrAge = 99;
/* string, number외 다른 값은 입력 불가
nameOrAge = false;
*/

//5. array
let leaders: (string | Number)[] = ["a", "b", "c", "d", "e"];
leaders[6] = 663;

//6. object
let myInfo: { name: string; age: number; isRich: boolean }[] = [
  { name: "h662", age: 99, isRich: true },
  { name: "시온", age: 10, isRich: false },
  { name: "백기", age: 20, isRich: false },
];

//7. function
function Add(a: number, b: number): number {
  return a + b;
}
//반환값이 없는 형태의 함수에는 void
function Add2(a: number, b: number): void {
  console.log(a + b);
}
Add2(1, 2);
