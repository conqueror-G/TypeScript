// 문자
const 이름: string = "kim";

// 숫자
const 나이: number = 1;

// 배열 안에는 어떤 타입이 들어오는지 명시 해주어야한다.
const 배열: string[] = ["1", "2", "3"];

// 또한 배열 안에 여러가지 타입이 들어올 수 있게 하려면? 유니온 타입 사용
const 혼합배열: (string | number)[] = [1, "2", 3];

// 객체
// 객체는 각 키에 해당하는 값이 어떤 타입인지 명시한다.
const 객체: { a: number; b: string } = { a: 1, b: "2" };

// 하지만 타입스크립트에서 굳이 타입을 다 명시할 필요는 없다. 타입 추론이 가능하기 때문이다
const a = 1;
const b = a - 1;

// 예외로는 any와 unknown이 있다.
// any는 어떤 타입이든지 다 올 수 있기 때문에, 타입스크립트를 사용하는 이유가 없다.
// unknown도 어떤 타입이든지 다 올 수 있긴 하지만, 타입의 안정성을 지켜준다.

// any를 사용하면, 타입스크립트가 아니라 자바스크립트라고 보면 된다.
// any를 사용시 에러가 나지 않는다.
let c: any;
let 숫자: number = 3 - c;

// unknown을 사용 시 에러가 나서 알려준다.
let d: unknown;
let e: number = 3 - d;

// 타입스크립트는 엄격한 자바스크립트이다. 그렇기 때문에 평소에 자바스크립트에서 하던 것이 안된다.
// 그러나 이것은 타입이 명시되었을 때 뿐이다.
// 타입이 명시되지 않으면, 타입추론이 정상적으로 적용되지 않는다.
let sum: string = 13 - "kim";
console.log(sum);

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
