type TList = { token: string; seller: string; price: number /*형번환필요*/ };
interface IList {
  token: "h662";
  seller: "asd";
  price: 1000;
}
let a: TList[] = [
  {
    token: "h662",
    seller: "asd",
    price: 1000,
  },
  {
    token: "h662",
    seller: "asd",
    price: 1000,
  },
];

//1번예시
type TCreature = {
  name: string;
  level: number;
};

interface ICreature {
  name: string;
  level: number;
}

const player: TCreature = {
  name: "Knight",
  level: 10,
};

const monster: ICreature = {
  name: "Skeleton",
  level: 8,
};

//2번예시
type TCreature2 = {
  name: string;
  level: number;
};

type THuman = TCreature & {
  age: number;
};

interface ICreature {
  name: string;
  level: number;
}

//상속느낌
interface IHuman extends ICreature {
  age: number;
}

//함수에
function someNumberFunction(a: number): number {
  return a;
}
function someStringFunction(b: string): string {
  return b;
}
someNumberFunction(1);
someStringFunction("a");

//제네릭?제너릭? : 타입을 정해주지 않고있다가 사용하는 시점에서 외부에서 타입을 정해서 사용할 수있도록 하는 고오-급 기술
function someFunction<T>(a: T): T {
  return a;
}
someFunction<number>(1);
someFunction<string>("a");
