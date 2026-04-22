


// Object literals

const jsUser = {
    name : "Arif",
    age: 26,
    location: "Jaipur",
    email : "arifkhanafrn@gmail.com",
    isLoggedIn : true
}

// this is two way you can access the object value 
console.log(jsUser.email);
console.log(jsUser["email"]);


// using this you can uspdate the object value 
jsUser.email = "arifkhan@gmail.com"



// you can freeze the object using this method 
Object.freeze(jsUser)





jsUser.greeting = function () {
    console.log(`Hello ${this.name}`);
    
}



console.log(jsUser.greeting());








// let username = "   arif   "

// let cleanUser = username.trim()

// if (cleanUser >= 3) {
//     console.log("Valid Username");
    
// } else {
//     console.log("Invalid Username");
    
// }



let amount = "5"

// let NumberAmount = Number(amount)

if (!isNaN(Number(amount)) && amount > 0) {
    console.log("Valid Amount");
    
} else {
    console.log("Invalid Amount");
    
}




let password = "abc 123"

let hasNumber = /\d/.test(password)
let hasSpace = password.includes(" ")


if (password.length >= 6 && hasNumber && !hasSpace) {
    console.log("Strong Password");
    
} else {
    console.log("Weak Password");
    
}


let user = {
  name: "   ARIF   ",
  email: "   test@gmail.com   "
}


let cleanUser = {
    name: user.name.trim().toLowerCase(),
    email: user.email.trim().toLowerCase()
}


if (cleanUser.email.includes("@gmail.com")) {
    console.log("Valid User");
    
} else {
    console.log("Invalid User");
    
}


let value = ""


if (value.length === 0) {
    console.log("Empty Value");
    
} else {
    console.log("Has Value");
    
}








let users = [
  {email:"test@gmail.com", password:"1234"},
  {email:"admin@gmail.com", password:"admin"}
]

let email = "   ADMIN@gmail.com   "
let password = "admin"


let cleanEmail = email.trim().toLowerCase()

if (users[0].email === cleanEmail) {
    if(users[0].password === password){
        console.log("Login Success"); 
    } else{
        console.log("Wrong Password"); 
    }
} else if(users[1].email === cleanEmail) {
    if (users[1].password === password) {
        console.log("Login Success");
    } else{
        console.log("Wrong Password"); 
    }  
} else{
    console.log("Email Not Found");
}




let prices = ["100", "200", "abc"]

let price1 = Number(prices[0])
let price2 = Number(prices[1])
let price3 = Number(prices[2])


let total = 0

if(!isNaN(price1)) total += price1
if(!isNaN(price2)) total += price2
if(!isNaN(price3)) total += price3


let discountPrice = (total * 10) / 100


console.log(discountPrice);



// Task 15
let users = ["arif", "ali", "rahul"]


let a = users[0].at(0).toUpperCase() + users[0].slice(1)
let b = users[1].at(0).toUpperCase() + users[1].slice(1)
let c = users[2].at(0).toUpperCase() + users[2].slice(1)


console.log(`${a} | ${b} | ${c}`);






let user = {
  name: "arif",
  isLoggedIn: true
}

if (user.isLoggedIn) {
    console.log(`Welcome ${user.name}`);
    
} else {
    console.log(""Please Login"");
    
}



let user = {
  name: "arif"
}

if (user.city.includes()) {
    console.log(`Your city name is ${city}`);
    
} else {
    console.log("City not available");
    
}




let user = {
  name: "arif",
  skills: ["js", "react"]
}

// option 1
let cleanName = user.name.at(0).toUpperCase() + user.name.slice(1)
console.log(`${cleanName} knows ${user.skills[0]} & ${user.skills[1]}`);


// option 2
let cleanName = user.name.at(0).toUpperCase() + user.name.slice(1)
let skills = user.skills.join(" & ")
console.log(`${cleanName} knows ${skills}`);





let amount = "500"

if (Number(amount)) {
    console.log("Valid Amount");
    
} else {
    console.log("Invalid Amount");
}



let users = ["arif", "ali", "rahul"]

let pickedUser = Math.floor(users.length * Math.random())

if (users[pickedUser] === "arif") {
    console.log("Admin Selected");
    
} else {
    console.log("User Selected");
    
}



let password = "abc123"





let price = "1000"
let discount = "10"


let discountValue = (price * discount) / 100 

let finalPrice = price - discountValue




let user = {
  email: "test@gmail.com",
  isActive: true
}



if (user.email.includes("@gmail.com")) {
    if (user.isActive) {
        console.log("User Active");
        
    }else{
        console.log("User Deactive");
        
    }
} else {
    console.log("Invalid Email");
    
}



let user = {
  name: "arif",
  age: 26
}


let userName = `name=${user.name}`
let userAge = `name=${user.age}`


let users = [
  {name:"arif", role:"admin"},
  {name:"ali", role:"user"}
]


console.log(users);





let price = "1000000"

let priceFinal = Number(price)
console.log(priceFinal.toLocaleString("en-in"));
