function add(x, y) { //1
    return x + y;
}

const result = add(10, 20); // 밑에 있는 add function을 호출해버림 그래서 undefined //3은 호출  //7은 result
console.log(result); //8

function add(x, y, z) { // 함수의 재정의. 자바스크립트는 오버로딩 안됨 //2
    console.log(x); //4
    console.log(y); //5
    console.log(z); //6
}

add(10, 20, 30); //9