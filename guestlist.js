var guests = ["Tony", "Dave" , "Rich", "Mary", "Donna", "Sarah"]
var guestName = prompt("What is your name human?");

if (guests.includes(guestName))
{
    alert("Congratulations, " + guestName + " you are on the list!");
}
else
{
    alert("Your names not down, your not coming in!");
}