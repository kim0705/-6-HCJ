let names = ["김준일", "김준이", "김준삼"];

console.log(names);

names = names.map((name, index) => {return name + "님"}); // map이 names에 있는 배열을 하나씩(name) 꺼내서 새로운 배열을 만들어줌
console.log(names);

names = names.filter((name, index) => index !== 1);
console.log(names);