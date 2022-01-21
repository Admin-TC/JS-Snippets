var name1 = prompt("What is your name?");
var name2 = prompt("What is your crush's name?")
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n > 90)
{
alert("There is a " + n + "% chance that you and " + name2 + " will be a thing! AMAZING!!!!");
}
if (n > 80)
{
alert("There is a " + n + "% chance that you and " + name2 + " will be a success so you should definitely ask them out!");
}
if (n <= 80 && n >= 65)
{
    alert("There is a " + n + "% chance that you and " + name2 + " will be a good couple.");
}
if (n < 65)
{
    alert("There is a " + n + "% chance that you and " + name2 + " will be a good couple. I would think twice if I were you...");
}
