var weight = prompt("What is your weight in kilograms?");
var heigt = prompt("What is your height in meters?");

function bmiCalculator (weight,height){
        
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
    }

bmiCalculator (bmi)

alert("Your BMI is " + bmi + ".")