var num = 10;
var sNum = "10";
console.log(num === sNum);

// alert(num); // node.js라는 콘솔창에서(런타임 환경) 실행됨

var num2;
console.log(!!num2); 
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> false

    var str = "test";
    !!str -> true
    str = "";
    !!str -> false

    var array = [ 1, 2, 3];
    !!array -> true
    array = [];
    !!array -> true // 배열은 비어있어도 true
    !!array.length -> false // 배열의 길이를 가지고 비교해야함
    array.length > 0 -> true
    array.length === 0 -> false
*/

var num = 0;
console.log(!!num);
var str = "";
console.log(!!str);
var array = [];
console.log(!!array);
console.log(!!array.length);
var a;
console.log(!!a);
var b = null; // null도 false
console.log(!!b); 
var c = 0 / 0; // NaN도 false
console.log(!!c); // 연산의 오류

if(!num) {
    var num2 = 20; // 지역 변수
    console.log("num은 0입니다.");
    if(!!num2) { // 이 if를 기준으로 봤을 때는 num2도 전역 변수
        console.log("num2는 값이 있습니다.");
    }
}

if(!str) {
    console.log("빈 문자열입니다.");
}

if(!b) {
    console.log("Null입니다.");
}