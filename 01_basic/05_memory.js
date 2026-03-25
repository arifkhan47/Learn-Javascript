// There are two types of memory 
// 1. stack
// 2. heap

// 1. stack Memory (Primitive datatypes)

// let name = "Arif";


// let realName = name;

// realName = "ayaz"

// console.log(realName); // ayaz (he only copy the value)



// 2. Heap Non-premitive

let user = {
    userName: "umar",
    upi: "umar@icici"
}


let costumer = user;
costumer.userName = "aslam";
// console.log(user.userName);


// let name = "   arif khan   "

let name = "Arif"

let nameString = name.toUpperCase();

console.log(nameString.slice(0, 1));



// console.log(name.at(3));
// console.log(name.at(-1));



// console.log(name.trim());

let text = "hello";
console.log(text.replace("hello", "olleh"));





// console.log(text.includes("rifk"));
// console.log(text.includes("python"));

let text1 = "apple,banana,mango"

// console.log(text1.split(","));


let email = "   arif@gmail.com   "


// console.log(email.trim());
// console.log(email.includes("@gmail.com"));

