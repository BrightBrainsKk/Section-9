// GET MILK

function getMilk(money, costPerBottle) {
    alert('leaveHouse');
    alert('moveRight');
    alert('moveRight');
    alert('moveUp');
    alert('moveUp');
    alert('moveUp');
    alert('moveUp');
    alert('moveRight');
    alert('moveRight');
    console.log('buy ' + calcBottles(money, costPerBottle) + ' bottles of Milk');
    alert('moveLeft');
    alert('moveLeft');
    alert('moveDown');
    alert('moveDown');
    alert('moveDown');
    alert('moveDown');
    alert('moveLeft');
    alert('moveLeft');
    alert('enterHowse');
    return calcChange(money, costPerBottle);
}
var change = getMilk(4);
console.log(change);

function calcBottles(startingMonay, costPerBottle) {
    var numberOfBottles = Math.floor(startingMonay / costPerBottle);
    return numberOfBottles;
}
function calcChange(startinAmount, costPerBottle) {
    var change = startinAmount % costPerBottle;
    return change;
}

console.log('Hello master, here is you ' + getMilk(10, 3) + ' change.');
