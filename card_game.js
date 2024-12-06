
let hasTwentyOne=false;
let isAlive=true;

let cards = []
let card =0;
let sum=0;

let message="";

let computerCards= []
let computerCard;
let computerSum;

const scoreEl=document.getElementById("score-el");

const messageEl=document.getElementById("message-el");
const sumEl=document.getElementById("sum-el");
const cardsEl=document.getElementById("cards-el");

const computerEl=document.getElementById("computer");
const computerSumEl=document.getElementById("computer-sum");
const stayBtn =document.getElementById("stay-btn");

const closeBtn=document.getElementById("close-btn");
const helpBtn=document.getElementById("help-btn");
const popUpEl=document.getElementById("pop-up");


closeBtn.addEventListener("click", function()
{
    popUpEl.style.display="none";   
})

helpBtn.addEventListener("click", function()
{
    popUpEl.style.display="block";
})

let player={
   name:"Score: ",
   score:100
}


scoreEl.textContent+=player.name+(player.score);

function winning()
{   
    scoreEl.textContent =" ";
    player.score+=10;
    scoreEl.textContent+=player.name+(player.score)+"";
}

function lose()
{   
    scoreEl.textContent =" ";
    player.score-=10;
    scoreEl.textContent+=player.name+(player.score)+"";
}

function startGame()
{

    sum=0;
    computerSum=0;
    card=0;
    cards=[];
    
    isAlive=true;
    hasTwentyOne=false;

    cardsEl.textContent="Your cards: ";
    computerEl.textContent="Computer cards: ?";
    sumEl.textContent="Sum: ";
    computerSumEl.textContent="";

    

    renderGame();
    messageEl.textContent="Want to play a round?";
}

function renderGame()
{

    cardsEl.textContent = "Your cards: ";
    
    for(let i=0;i<cards.length;i++)
    {
     cardsEl.textContent +=" "+ cards[i];
    }

    sumEl.textContent="Sum: "+sum;

    if(sum<21){
        message="Do you want to draw a new card?";
        messageEl.textContent=message;
    }
    else if(sum==21)
    {
        message="You have 21 press Stay button to show the result";
        messageEl.textContent=message;
        hasTwentyOne=true;
    }
    else{
        message="You're out of the game!"
        messageEl.textContent=message;
        lose();
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
    else if(cardNumber>10)
    {
        return 10;
    }
  return cardNumber;
}

function newCard()
{
    
    if(hasTwentyOne==false && isAlive){

        card=getRandomNumber();
        sum+=card;
        cards.push(card)
        renderGame();
    }
}

function winnerDecider()
{

    if (computerSum>21&&sum<=21){
        message="You Win";
        messageEl.textContent=message;
        winning();
    }
    else if(computerSum<sum)
    {
        message="You Win";
        messageEl.textContent=message;
        winning();
    }
    else if(sum<computerSum){
        message="You Lose";
        messageEl.textContent=message;
        lose();
    }
    else if(sum==computerSum){
        message="Draw";
        messageEl.textContent=message;
    }
    else if(sum===21&& !computerSum==21){
        message="Wohoo! You've got 21 You Win!"
        messageEl.textContent=message;
        hasTwentyOne=true;
        winning();
    }

}

// let computerCards= []
// let computerCard;
// let computerSum;
// const computerEl=document.getElementById("computer");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

stayBtn.addEventListener("click", function()
{
    if(!sum==0&&isAlive==true)
    {
        computerSum=0;
        computerEl.textContent="Computer cards: "
        while(computerSum<17)
        {
            computerCard=getRandomNumber();
            computerSum+=computerCard;
            computerEl.textContent+=" "+computerCard;
            computerCards.push(computerCard);
        }

        computerSumEl.textContent="Sum: "+computerSum;

        winnerDecider();

        isAlive=false;
    }
})





console.log(message);