var weight = prompt("What is your weight in kilograms?");
var heigt = prompt("What is your height in meters?");
var bmi = 0;

function bmiCalculator(weight,height){
        
    bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
    }

bmiCalculator(weight,height)

alert("Your BMI is " + bmi + ".");

