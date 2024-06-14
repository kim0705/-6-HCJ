function modifyUser(user, target, value) {
    const newUser = {
        ...user,
        [target]: value // []를 사용하지 않으면 target자체가 키 값으로 사용됨
    };
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

    // delete user.password; // delete는 .(참조형식)을 사용해야함
    
    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [ user, newUser ];
    const newUserList = [ ...userList, newUser2 ]; // 깊은 복사(배열 안의 요소를 복사)

    // 스프레드 -> 깊은 복사

    const userList2 = userList; // 얕은 복사(주소 복사)
}

main();