
let hasTwentyOne=false;
let isAlive=true;
let cards = []
    let sum=0;
let message="";
const messageEl=document.getElementById("message-el");
const sumEl=document.querySelector("main p:nth-child(4)");
const cardsEl=document.getElementById("cards-el");
let card =0;


function startGame()
{

    sum=0;
    card=0;

    cardsEl.textContent="Cards: "
    sumEl.textContent="Sum: "+sum;
    

    renderGame();
    messageEl.textContent="Want to play a round?";
}

function renderGame()
{

    cardsEl.textContent = "Cards: ";
    
    for(let i=0;i<cards.length;i++)
    {
     cardsEl.textContent +=" "+ cards[i];
    }

    sumEl.textContent="Sum: "+sum;

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

function getRandomNumber()
{
    let cardNumber=Math.ceil(Math.random()*13);
    if(cardNumber==1)
    {
        return 11;
    }
    else if(cardNumber==11||cardNumber==12||cardNumber==13)
    {
        return 10;
    }
  return cardNumber;
}

function newCard()
{
    card=getRandomNumber();
    sum+=card;
    cards.push(card)
    renderGame();
}





console.log(message);