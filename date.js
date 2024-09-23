let now = new Date();

console.log(now)

let endCourse = new Date(2025,2,20) //2 is March because it's an array and it starts from 0
console.log(endCourse)
console.log(endCourse.toLocaleString())

//Calculate the remaining days til the course is over

let remainingDays = endCourse - now
remainingDays = remainingDays /60000 //Thats minutes
remainingDays = remainingDays / 60 //Thats hours
remainingDays = remainingDays /24 //Thats days
console.log(remainingDays)
