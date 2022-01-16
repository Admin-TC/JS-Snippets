/*

1) Asks the user for their name
2) Slices out the first letter and capitalises
3) Slices out the remaining string and makes lowercase
4) Replies with an alert Hello Name

*/

var myName = prompt("What is your name human?");
var firstLetter = myName.slice(0,1);
var remaining = myName.slice(1,myName.length);
remaining = remaining.toLowerCase();
firstLetter = firstLetter.toUpperCase();
alert("Hello " + firstLetter + remaining);
