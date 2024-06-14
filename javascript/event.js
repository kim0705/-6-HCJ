function handleButtonClick(e) {
    console.log({event: e});
    //console.log(e.target.innerHTML);
    e.target.innerHTML = "취소";
}

// function handleInputChange(e) {
//     if(e.keyCode === 13 || e.key === "Enter") {
//         alert(e.target.value);
//     }
// }

function handleInputChange(e) {
    if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        alert(e.target.value);
    }
}

// let isFocus = false;

// function handleInputFocus(e) {
//     isFocus = true;
//     if(!isFocus) {
//         isFocus = true;
//         alert("입력하세요!");
//     }
// }

function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}

