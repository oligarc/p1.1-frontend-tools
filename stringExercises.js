let firstName = "Oliver";
let lastName = "García";

//CONCATENATION AND TEMPLATE LITERALS
console.log("My name is " +firstName + " and my last name is " +lastName);
console.log(`${firstName}  ${lastName}`);

//STRING METHODS
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

console.log(firstName.substring(0,2))
console.log(lastName.slice(1,4))

//STRING INTERPOLATION

let fullData = `${firstName} 
                ${lastName}
                Rafael Alberti`

console.log(fullData)

//SPLITTING AND TRIMMING STRINGS

let things = "Coco,        Margarita,Caritrini,   Peter,Woody"
let thingSplits = things.split(/[ ,]+/) //Regular expression that takes off the spaces between the list of things. Its pretty good
console.log(thingSplits)


//CHECKING AND CONVERTING

let tryVariable = "123";
console.log(isNaN(tryVariable)) //False, so it's a number

console.log(Number(tryVariable) +4) //Change 123 to number and add 4
console.log(tryVariable+4) //If not, it is concatenated.

let stringToNumber = Number(tryVariable)
console.log(typeof(stringToNumber))
console.log(typeof(stringToNumber.toString()))
let toFixed = stringToNumber.toFixed()


