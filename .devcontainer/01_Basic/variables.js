const userId = 49809343;
let userName = "Arif khan";
var userEmail = "arifkhanafrn@gmail.com"; /* Please avoid this var because of this you will face issue in block scope and funtional scope */

userState = "Pune" /*It will be work but its wrong practice dont write like this*/


console.log(userId);


console.table([userId, userName, userEmail, userState])