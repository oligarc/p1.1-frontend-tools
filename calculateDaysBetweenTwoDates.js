/*
Create a function calculateDaysBetweenDates(date1, date2) that takes two date strings as input.
Parse the date strings into Date objects.
Calculate the difference in milliseconds between the two dates.
Convert the difference in milliseconds to days.
Return the number of days between the two dates.

*/

let date1 = "2024-07-01";
let date2 = "2024-07-13";

function calculateDaysBetweenDates(date1,date2){

    let days = 0;

    let dateparse1 = Date.parse(date1);
    let dateparse2 = Date.parse(date2);

    let biggerDate = new Date();
    let lowestDate = new Date();

    if(dateparse1>dateparse2){
        biggerDate = dateparse1;
        lowestDate = dateparse2;
    }else{
        biggerDate = dateparse2;
        lowestDate = dateparse1;
    }

    days = (biggerDate - lowestDate) / (24*60*60*1000)
    return days;
    
}

function calculateDaysBetweenDatesAbsoluteValue(date1,date2){

    let parse1= Date.parse(date1);
    let parse2 = Date.parse(date2);

    return Math.abs((parse1-parse2) / (24*60*60*1000))

}

let prueba = calculateDaysBetweenDates(date1,date2);
console.log(`There are ${prueba} days between ${date1} and ${date2}`)

let prueba2 = calculateDaysBetweenDatesAbsoluteValue(date1,date2);
console.log(`There are ${prueba2} days between ${date1} and ${date2}`)


