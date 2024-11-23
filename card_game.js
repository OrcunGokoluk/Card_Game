
let firstCard=10;
let secondCard=11;
let hasTwentyOne=false;
let isAlive=true;

let message="";
const messageEl=document.getElementById("message-el");
const sumEl=document.querySelector("main p:nth-child(4)");
const cardsEl=document.getElementById("cards-el");

const sum=firstCard+secondCard;


function startGame()
{
    sumEl.textContent+=sum;
    cardsEl.textContent+=firstCard+" - "+secondCard;

    if(sum<21){
        message="Do you want to draw a new card?";
        messageEl.textContent=message;
    }
    else if(sum===21){
        message="Wohoo! You've got 21!"
        messageEl.textContent=message;
        hasTwentyOne=true;
    }
    else{
        message="You're out of the game!"
        messageEl.textContent=message;
        isAlive=false;
    }
}


console.log(message);