var bottles = 99

function drinkTheBottles() {

    while (bottles > 0) {
        console.log(bottles + " bottles of beer on the wall. " + bottles + " bottles of beer. Take one down, pass it around!")
        bottles--
        console.log(bottles + " bottles of beer on the wall!")
    }

    return bottles
}