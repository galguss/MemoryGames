//------images------
let crashBendicoot = "images/crashBendicoot.jpg";
let diablo = "images/diablo.png";
let doom = "images/doom.jpg";
let eldenRing = "images/Elden-Ring.jpg";
let flyff = "images/flyff.jpg";
let godOfWar = "images/godOfWar.jpg";
let hitman = "images/hitman.jpg";
let horizon = "images/horizon.png";
let leagueOfLengeds = "images/leagueOfLegeds.jpg";
let oddworld = "images/oddworld.png";
let princeOfParsia = "images/princeOfParsia.jpg";
let rappelz = "images/rappelz.jpg";
let rayman = "images/rayman.png";
let suolCalibur = "images/soulCalibur.jpg";
let fable = "images/fable.jpg";
let backCard = "images/klaf.jpg";

const games = [crashBendicoot, diablo, doom, eldenRing, flyff, godOfWar, horizon, leagueOfLengeds, oddworld, princeOfParsia, rappelz, rayman, suolCalibur, fable, hitman,
    crashBendicoot, diablo, doom, eldenRing, flyff, godOfWar, horizon, leagueOfLengeds, oddworld, princeOfParsia, rappelz, rayman, suolCalibur, fable, hitman];

//----------help tools---------
let checkCards = [];
let ids = [];
let counterCards = 0;
let cardsThatCameOutOfTheGame = [];

//-----------players-----------------
let toggelTurn = false;
const playerA = document.getElementById('playerA');
const playerB = document.getElementById('playerB');
let testCards = false;


//---------games container-----------
const cards = document.getElementById('cards');
let divs = ""; 


for(let k = 0; k < games.length; k++){
     divs +=`<div id ="card${k}" onclick=" clicks(${k})"><img id="${k}" src="${backCard}"></div>`;   
 }

cards.innerHTML = divs;



function clicks(id){
    if(!toggelTurn){
        playerA.style.border = "white solid 5px";
        playerB.style.border = "none";
    }else{
        playerB.style.border ="white solid 5px";
        playerA.style.border = "none";
    }
    
    if((checkCards.length == 0) && (!testCards) && (cardsThatCameOutOfTheGame.indexOf(games[id]) < 0)){
        document.getElementById(id).src = games[id];
        ids.push(id);
        checkCards.push(games[id]);

    }else if((checkCards.length == 1) && (ids[0] != id) && (cardsThatCameOutOfTheGame.indexOf(games[id]) < 0)){
        document.getElementById(id).src = games[id];
        ids.push(id);
        checkCards.push(games[id]);
        testCards = true;

        if(checkCards[0] === checkCards[1]){
            cardsThatCameOutOfTheGame.push(checkCards[0]);
            counterCards += 2;
             outCards();
             checkCards = [];
             ids = [];
             addScore();
             testCards = false;
             console.log(cardsThatCameOutOfTheGame);
           }else{
            setTimeout(back, 500);
            testCards = false;
           }
    }

    if(counterCards == games.length){
        winner();
    }
} 



function outCards(){
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).style.border = "none";
        document.getElementById(ids[i]).remove();
    }
}




function turnPlay(){
    if(toggelTurn){
        toggelTurn = false;
    }else{
        toggelTurn = true;
    }
}



let scorePlayer1 = 0;
let scorePlayer2 = 0;



function addScore(){
    let playerA = document.getElementById('PointsA');
    let playerB = document.getElementById('PointsB');
    if(!toggelTurn){
        scorePlayer1++;
        playerA.innerHTML = scorePlayer1;
    }else{
        scorePlayer2++;
        playerB.innerHTML = scorePlayer2;
    }
}



function back(){
    for(let k = 0; k < ids.length; k++){
        document.getElementById(ids[k]).src = backCard;
    }
    checkCards = [];
    ids = [];
    turnPlay();
}




const shuffle = (array) => {
    for(let i = array.length -1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;  
    }
}



function winner(){
    document.getElementById('winner').style.display = "flex";
    let win = document.getElementById('play');

    if(scorePlayer1 > scorePlayer2){
        win.innerHTML = " A";
    }else if(scorePlayer1 < scorePlayer2){
        win.innerHTML = " B";
        document.getElementById('winner').style.backgroundColor = "#f4962bbd";
    }else{
        win.innerHTML = " Player 1 and Player 2 are equal";
    }  
}




function newGames(){
    for(let k = 0; k < games.length; k++){
        document.getElementById(`card${k}`).innerHTML = `<img id="${k}" src="${backCard}">`;   
    }
    shuffle(games);
    cardsThatCameOutOfTheGame = [];
    checkCards = [];
    ids = [];
    counterCards = 0;
    toggelTurn = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.getElementById('winner').style.display = "none";
    document.getElementById('PointsA').innerHTML = 0;
    document.getElementById('PointsB').innerHTML = 0;
}







