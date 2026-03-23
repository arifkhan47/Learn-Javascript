// There are two types of memory 
// 1. stack
// 2. heap

// 1. stack Memory (Primitive datatypes)

let name = "Arif";

let realName = name;

realName = "ayaz"

console.log(realName); // ayaz (he only copy the value)



// 2. Heap Non-premitive

let user = {
    userName: "umar",
    upi: "umar@icici"
}


let costumer = user;
costumer.userName = "aslam";
console.log(user.userName);


