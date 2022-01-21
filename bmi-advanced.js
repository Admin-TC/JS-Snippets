var weight = prompt("What is your weight in kilograms?");
var height = prompt("What is your height in meters?");
var bmi = 0;
var interpretation; 

function bmiCalculator (weight, height) {
 
    bmi = weight / Math.pow(height, 2);
    Math.round(bmi);

    if (bmi < 18.5)
    {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi > 18.5 && bmi < 24.9)
    {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } 
    if (bmi > 24.9)
    {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    
    return interpretation
}

bmiCalculator(weight, height);


