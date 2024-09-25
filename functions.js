// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Call
let message = greet('Alice');
console.log(message); // Output: Hello, Alice!

setTimeout(function() {
    console.log("Hello after 10 seconds");
}, 10000);

setInterval(function() {
    console.log("Hello every 2 seconds");
}, 2000);

callback = () =>{ //Arrow function
    console.log("Hi there 5secs")
}

//To define a function use function name () and then the code

function add(a,b){
    return a+b;
}

//Function by expression

const multiply = function(a,b){ //You can do this to a variable or a constant, it's called a lambda function
    return a*b;
}

let result = multiply(3,5);
console.log(result);

//Even if the function is declared at the bottom of the script and you call it before, its gonna work
//Doesnt apply with lambda functions

//Then we have the arrow function

const f4 = a => a+100;

/*
const division = function(a,b){
    return a/b;
}
    First step

const division = (a.b) =>{
    return a/b
}

    Second step
*/

const division = (a,b) => a/b;
//Third step and final because you have two arguments, if you only have one argument you can omit the parenthesis

