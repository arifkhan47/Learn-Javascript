// array 


const myArr = ["arif", "husain", "khan", "age 26" , "dattawadi", "pune"]      // in the array indexing start from 0
const phone = [8, 5, 3, 0, 8, 1, 8, 2, 1, 2]

console.log(myArr[1]);    // "husain"   // this is the way you can access the array and thei value


// arrays Methods

// myArr.push("age 26")     // [ 'arif', 'husain', 'khan', 'age 26' ]   // adding value at the end in the array
// myArr.pop()    //   [ 'arif', 'husain' ] // remove the last value from the array
// myArr.unshift("Mohammad")     //   [ 'Mohammad', 'arif', 'husain', 'khan' ]     /adding the value at the start of the array
// myArr.shift()   //       [ 'husain', 'khan' ] //  removed the first value of array

// ask the question to array method

phone.includes(9)    // false     // this methode return the boolean value
phone.includes(8)    // true     // this methode return the boolean value
phone.indexOf(4)     // 8     show the value of that index
phone.join()       //  8,5,3,0,8,1,8,2,1,2    convert into string all values

// myArr.slice(1, 4)   // [ 'husain', 'khan', 'age 26' ]  // start from 1 but last value is before 4 means 3, 
// BUT IN THAT CASE THE ORIGIONAL ARRAY VALUE NOT BE CHANGED MEANS  myArr = ["arif", "husain", "khan", "age 26" , "dattawadi", "pune"]



// myArr.splice(1, 4)     // [ 'husain', 'khan', 'age 26', 'dattawadi' ]     // start from 1 but last value is 4, 
// BUT IN THAT CASE THE ORIGIONAL ARRAY VALUE CHANGED MEANS  myArr = ["arif", "pune"]


console.log(myArr.splice(1, 4));
console.log(myArr);

