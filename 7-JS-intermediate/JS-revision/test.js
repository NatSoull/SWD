// let NS;
// NS = "Nat-Soul";

// console.log(NS)

// const num = 016 / 2;
// console.log(num)

// let x = [];
// let y = [];
// console.log(x == y)



// let a = 5
// let b = a

// console.log(b)
// a = 10
// console.log(b)



// let a = ["a"]
// const b = a

// console.log(b)

// a[1] = "aa"
// a = []

// console.log(b)
// console.log(a)



// const arr = [];
// arr[0] = "aa";
// arr[1] = "bb";
// arr[2] = "cc";
// console.log(arr)


// const arr = [];
// console.log(arr ? true : false);
// const object = {};
// console.log(object ? true : false);

// const obj = {};
// obj.a = "aa";
// obj.b = "bb";
// console.log(obj)



// console.log(run())

// function run() {
//     console.log("I'm a");
//     console.log("I'm b");
//     console.log("I'm c");
//     return "I'm run";
// };


// // function expression


// const result = function(x,y){
//     console.log(x)
//     console.log(y)
//     console.log("I'm fun expression")
//     return x + y
// }

// console.log(result(1,2));



// (function() {
//     console.log("I'm IIFE")
// })()



// for ((
//     function(){
//         console.log("I'm 1st statement")
//         return i = 1
//     }
// )() ; (
//     function(){
//         console.log("I'm 2nd statement")
//         return i < 10
//     }
// )() ; i++) {
//     console.log(i , "I'm loop")
// }


// console.log(`${(function(){
//     console.log("IIFE")
//     return "Hello"
// })()} World`)



// {
//     let x = 5
// }

// console.log(x)



// const obj = {
//     a : "aaa",
//     b : 5,
//     c(){
//         console.log(this)
//     },
//     d : function(){
//         console.log(this)
//     }
// }
// console.log(obj.d())



// if(false){
//     console.log("true code blog")
// }
// else if(){
// }
// else{
//     console.log("false code blog")
// }


// console.log(false ? "true expression" : "false expression")

// true && console.log("I'm true")



// for (let i = 1 ; i <= 10 ; i++){
//     if(i === 5) continue
//     console.log(i , "looping")
// }


// let i = 1
// while(i <= 10){
//     console.log("Hello",i)
//     i++
// }


// let i = 1
// do{
//     console.log("do while loop",i)
//     i++
// } while(i <= 10)



// const fruits = ["apple","orange","banana","mango","avocado"]

// for (let i = 0 ; i < fruits.length ; i++){
//     console.log(i, fruits[i])
// }

// for (fruit of fruits){
//     console.log(fruit);
// };

// for (x in fruits){
//     console.log(x ,fruits[x] );
// };



// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",
//     d : "ddd"
// }

// for(x in obj){
//     console.log(x,obj[x])
// }

// for(objj of obj){
//     console.log(objj)
// }