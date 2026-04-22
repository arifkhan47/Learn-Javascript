function myFunction(num1, num2) {
    // console.log(num1 + num2);
    // let result = num1 +num2
    return num1 + num2
}

// console.log(myFunction(8,9));



function loginUser(userName) {
if (!userName) {
    return `please select the user`
}
    return `${userName} is logged in`
}

console.log(loginUser("hdfhg"));
