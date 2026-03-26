const price = 4000.426;    // 4000
const total = new Number (7000)       // [Number: 7000]
// console.log(price)         // [Number: 7000]

// console.log(total.toString())      // convert number into string


// console.log(price.toFixed(2));   //  4000.42   // fixed the count after desimal point

let otherNumber = 123.88
// console.log(otherNumber.toPrecision(2));    // use specific number of digit


let hundred = 60000000
// console.log(hundred.toLocaleString('en-IN'));     // add money standard , defalult value as US


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);      // its an object 
// console.log(Math.abs(-24354));   // make value positive from nagative
// console.log(Math.round(6.7));    // roudfigure amount show mean without desimal if value >.5 then floor value and if <.5 then ceil value
// console.log(Math.ceil(4.1));     // 5   // always get top value
// console.log(Math.floor(8.9));    // 8   // Always get lower value


// console.log(Math.random());    // always come ramdom value
// console.log(Math.random()*10);   // this is the login always come number 1 to 10

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min));      // formula for random count min to max




let price5 = 1234567.89;

console.log(price5.toLocaleString('en-IN'));



