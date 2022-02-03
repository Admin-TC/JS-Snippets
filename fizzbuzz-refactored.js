/* 

The FizzBuzz problem is a classic test given in coding interviews. 

The task is simple:

Print integers 1 to N, but print “Fizz” if an integer
is divisible by 3, “Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5.

*/

var output = [];
var number = 1;

function FizzBuzz()
{
        
        if (number%3 == 0 && number%5 == 0)
        {
            output.push("FizzBuzz");
        }
        
        else if (number%3 == 0)
        {
            output.push("Fizz");
        }

        else if (number%5 == 0)
        {
            output.push("Buzz");
        }

        else
        {
            output.push(number);
        }   
    
    number++;
    return output
}

 console.log(output)