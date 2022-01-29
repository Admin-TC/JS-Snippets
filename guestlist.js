var guests = ["Tony", "Dave" , "Rich", "Mary", "Donna", "Sarah"]
var name = prompt("What is your name human?");

if (guests.includes(name))
{
    alert("Congratulations, " + name + " you are on the list!");
}
else
{
    alert("Your names not down, your not coming in!");
}