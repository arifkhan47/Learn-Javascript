let score = "45fs";
let numberScore = Number(score);
console.log(typeof (numberScore));


console.log(numberScore);

/*
45 => 45 number
"45" => 45 number
"45sfd" => NaN

*/


let matchNo = null

let changeMatchNo = Number(matchNo);
console.log(changeMatchNo);


let booleanValue = "arif";
let changeBoolean = Boolean(booleanValue);
console.log(changeBoolean);


/* 
true => 1     false => 0 
"" => false
"arif" => true
*/




// Datatypes operations

// "1" + 5 = 15
// "1" + "5" = 15
// "1" + 5 + 6 = 156
// 1 + 5 + "6" = 66

// let a = "25"
// let b = Number(a) + 10;
// console.log(b);

// console.log(typeof null)   // this output will be come object

// console.log("10" + 5 * 2)

// let value = "0"

// if(value) {
//   console.log("True hai")
// } else {
//   console.log("False hai")
// }


// false, 0, "", null, undefined, NaN    // this all values are false

// console.log(Boolean("0"))
// console.log(Boolean(" "))

// console.log(Number("50abc"))
// console.log(parseInt("50abc"))

// console.log("5" + 5)
// console.log("5" - 5)

// let a = "20"
// let b = "10"

// console.log(a + b)
// console.log(Number(a) + Number(b))

// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))

// console.log([] + [])   /  [] js convert this into "" sstring thats why "" + "" = blank space

// console.log(" " == 0)
// console.log(" " === 0)

// let x = "100px"
// let y = Number(x)

// console.log(y)

console.log(false == "")
console.log(false === "")

console.log("1" == true)
console.log("1" === true)

console.log([] == false)
console.log([] === false)