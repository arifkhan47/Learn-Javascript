// singleton
// Object.create


const tinderUser = new Object()      // this is the blank object. singleton object


const instaUser = {}   // this is the blank object .   non singlton object

instaUser.id = "arifkhan47"
instaUser.name = "arif khan"
instaUser.email = "arifkhanafrn@gmail.com"




const regularUser = {
    email: "arifkhan@gmail.com",
    fullName:{
        firstName:"Arif",
        middleName: "Husain",
        lastName: "Khan"
    }
}


console.log(regularUser.fullName.lastName);



const obj1 = {
    item: 1,
    item : 2,
    item: 3
}
const obj2 = {
    item: 4,
    item : 5,
    item: 6
}

const obj3 = Object.assign({}, obj1, obj2)     // add two object in one new object


const obj4 = {...obj1, ...obj2}       // using spred operator also you can join two object in new object


console.log(Object.keys(obj1));     // you can access the kyes of this object and this method returns array datatype
console.log(Object.values(obj1));     // you can access the values of this object and this method returns array datatype
