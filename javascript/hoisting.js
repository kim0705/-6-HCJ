console.log(a);

//var a = 10; // 변수 선언만 되는거지 초기화는 밑에서 됨. 그래서 undefined

var a;

a = 10;

var b = 10;
console.log(b);

var b = 20;
console.log(b);

let c = 30;
console.log(c);
// let c = 40; let은 호이스팅 안됨
c = "40";

const d = 50;
console.log(d);
// d = 60; 상수라서 재할당 안됨
