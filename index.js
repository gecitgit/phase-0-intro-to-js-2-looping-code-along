// Code your solutions in this file
/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(name, event){
    let newArray = [];
    for (let i = 0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(number){
    while (number > -1){
        console.log(number);
        number--;
    }
}