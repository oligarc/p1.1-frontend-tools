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