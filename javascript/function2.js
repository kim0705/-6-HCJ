const USERNAME = "admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

login("admin", "1234");

const login2 = login; // 상수에 함수를 대입

login2("admin", "1234");

const add2 = function add(x, y) { // 함수 자체를 바로 대입도 가능
    return x + y;
}

console.log(add2(10, 20));

const sub2 = function (x, y) { // 익명 함수
    return x - y;
}

console.log(sub2(20, 10));

//화살표 함수(람다)
// const div = function (x, y) {
//     return !x || !y ? 0 : x / y;
// }
let div = (x, y) => {
    return !x || !y ? 0 : x / y;
}

console.log(div(10, 2));

//화살표 함수(명령어 한줄)
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2));


//화살표 함수(매개변수가 하나면 괄호생략)
const print = data => console.log(data);

print("출력");

// 함수 안에서 함수 정의
// function main() {           
//     function test() {
//         console.log("테스트 함수 호출");
//     }

//     test();
// }

// main();
//test(); main()안에서 정의되서 밖에서 호출 불가능

function main() {           // 함수 안에서 함수 정의는 무조건 화살표 쓰기
    const test = () => {
        console.log("테스트 함수 호출");
    }

    test();
}

main();