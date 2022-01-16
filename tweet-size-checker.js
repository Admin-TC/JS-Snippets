var TweetLength = 140;
var Tweet = prompt("Enter your tweet, you have 140 characters of opportunity");
var myTweetLength = Tweet.length;
var remainingChar = TweetLength - myTweetLength;

if (remainingChar > 0)
{
alert("You have used" + " " + myTweetLength + " " + "out of" + " " + TweetLength);
alert(Tweet);
}

else
{

alert("Your tweet has been reduced to 140 characters!");
alert(Tweet.slice(0,140));
}

