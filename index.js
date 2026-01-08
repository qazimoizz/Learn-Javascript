// Learning Javascript

// const Profile = {
//     fullName : "Shraddha khapra",
//     Isfollow : true,
//     followcount : 1000,
//     bio : "I am Shraddha khapra",
// };

// console.log(typeof Profile.Isfollow); 

// let x = 5
// x++;
// ++x;
// console.log(x);


// console.log( 10 == "10");
// console.log( 10 === "10");

// let a = true;
// let b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// let x = 10;
// let y = x++ + ++x;
// console.log(y);

// let marks = 80;
// if( marks > 50 || marks < 100){
//     console.log("pass");
// }




// if else questions  and  else if




// let age = 20;
// let citizen = true;

// if ( age >= 18 || citizen === true ){

//     console.log("Eligible to vote");
// }
// else{
//     console.log("Not eligible to vote");
// }
 
// let num = 13;

// if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }


// let mode = "light";
// let color;

// if ( mode === "dark"){
 
//     console.log(color = "black");
// } else {
//     console.log(color = "white");
// }

// let num = prompt("Enter a number");

// if (num > 0){
//     console.log("Positive");
// }else{
//     console.log("Negative");
// }

// let age = prompt("Enter a number");

// if (age > 18){
//     console.log("Allowed");
// }else{
//     console.log("Not allowed");
// }

// let password = prompt("Enter a password");
// empty 
// if ( password === empty ){
//     console.log("Password is empty");
// }else{
//     console.log("Password is not empty");
// }


// let temperature = prompt("Enter a temperature");

// if ( temperature > 30){
//     console.log("hot");
// }else{
//     console.log("Cold");
// }

// let num = prompt("Enter a number");

// if ( num % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }



// let marks = prompt("Enter a marks");

// if (marks >=80 && marks <= 100){
//     console.log("A");
// }else if (marks >=60 && marks < 80){
//     console.log("B");
// }else if (marks <= 40){
//     console.log("fail");
// }

// let time = prompt("Enter a time");

// if( time >= 6 && time < 12){
//     console.log("Good Morning");
// }else if (time >= 12 && time < 18){
//     console.log("Good Afternoon");
// }else{
//     console.log("Good Evening");
// }

// let traffic = prompt("Enter a traffic");

// if (traffic === "red"){
//     console.log("Stop");
// }else if (traffic === "yellow"){
//     console.log("Ready");
// }else if (traffic === "green"){
//     console.log("Go");
// }else{
//     console.log("Invalid"); 
// }

// let age = prompt("Enter a age");

// if (age >= 5 && age <= 13){
//     console.log ("child")
// } else if ( age >= 13 && age <= 20 ){
//     console.log("Teen")
// }else if ( age >= 20 && age <= 65){
//     console.log("Adult")
// }else if ( age >= 65){
//     console.log("Senior")
// }else{
//     console.log("Invalid")
// }

// let balance = 999;

// if (balance === 0 ){
//     console.log("Zero balance");

// }else if (balance >= 1 && balance <= 999){
//     console.log("Low balance");

// }else if (balance >= 1000){
//     console.log("sufficient balance");
// }



// Logic thinking 

// let Correctusername = "shraddha";
// let Correctpassword = "123456";

// let username = prompt("Enter a username");
// let password = prompt("Enter a password");

// if ( password.length < 6){
//     console.log("Password should be at least 6 characters");
// }
//     else if ( username === Correctusername && password === Correctpassword){
//     console.log("Login successful");
// }
// else if (username === Correctusername && password !== Correctpassword){
//     console.log("login failed");
// } 

// let Fullname = "qazi moiz"
// let name = prompt("Enter a name")

// name === Fullname ? alert("Welcome"): alert("Invalid")



// let num =  prompt("Enter a number");

// if (num % 5 === 0){
//     alert("yes this number is a multiple of 5")
// }else {
//     alert("no this number is not a multiple of 5")
// }

// for(let i = 0; i <=40; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


let name = "qazi moiz";

for( let i = 0; i < name.length; i++){
    console.log("Character at index " + i + " is " + name[i]);
}
