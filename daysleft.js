var yourAge = prompt("Whats is your age human?");

function lifeInWeeks(age){

    var yearsLeft = 90 - age;

    daysLeft = 365 * yearsLeft;
    weeksLeft = 52 * yearsLeft;
    monthsLeft = yearsLeft * 12;

alert("Assuming you make it to 90 (hopefully!), you have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left on planet earth.");

}

lifeInWeeks(yourAge);


