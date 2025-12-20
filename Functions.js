// this is a normal function which can be called before declaration
// and it is hoisted.

// function display(){
//     console.log("hellow this is a Display function")
// }
// display();

// ************************************************
// var display = function() {
//     var a = "5";
//     console.log(a);
// }
// display();

// ************************************************
// This is a function expression only can be called after declaration of function.
// var add = function() {
//     var a = 5;
//     var b = 5;
//     var c = a+b;
//     console.log(c);
// }
// add(); 

// ************************************************
// var add = function(a,b){
//     var c = a+b;
//     console.log(c);
// }
// add(5,9);
// This above function console/concat the "C" But not returning the any value
// therefore the return word is used which make sure the function must return some value.

// ************************************************
// var add = function(a,b){
//     var c = a+b;
//     return c;
// }
// console.log(add(5,9));

// ************************************************
