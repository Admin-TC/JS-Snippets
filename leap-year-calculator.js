var isLeapyear = Boolean;
var isDivisible4 = Boolean;
var isDivisible100 = Boolean;
var isDivisible400 = Boolean;

var year = prompt("Hello human, please enter a year");
var check1 = year % 4
var check2 = year % 100
var check3 = year % 400


checkLeapYear(year)


function checkLeapYear ()
{
    if (check1 == 0)
    {
        isDivisible4 = true;
    } 
    if (check2 == 0)
    {
        isDivisible100 = true;
    }   
    if (check3 == 0)
    {
        isDivisible400 = true;
    }



    if (isDivisible4 == true)
    {
        isLeapyear = true;
    }
    else {
        return isLeapyear = false;
    }

    if (isDivisible100 == true)
    {
        isLeapyear = false;
    }
    else {
        return isLeapyear = true;
    }
    
    if (isDivisible400 == true)
    {
        isLeapyear = true;
    }

    return isLeapyear;
}

if (isLeapyear == true)
    {
        alert("The year " + year + " is a leap year!")
    }
    else {
        alert("The year " + year + " is NOT a leap year (sad face).")
    }