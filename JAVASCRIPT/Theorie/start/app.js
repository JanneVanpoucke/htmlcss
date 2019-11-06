var scores, activePlayer, roundScore, gamePlaying; //je declareert je variabelen buiten de functie omdat je ze ook daarbuiten wil kunnen aanspreken
init();
function nextPlayer(){
    //checken wie de actieve speler is op dit ogenblik
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById(`current-0`).textContent=`0`;
    document.getElementById(`current-1`).textContent=`0`;
    document.querySelector(`.player-0-panel`).classList.toggle(`active`); //togle is aan en uit zetten
    document.querySelector(`.player-1-panel`).classList.toggle(`active`);
    document.querySelector(`.dice`).style.display=`none`;
}
document.querySelector(`.btn-new`).addEventListener(`click`,init); //elke keer je op knop new game klikt, wordt je init functie uitgevoerd
document.querySelector(`.btn-roll`).addEventListener(`click`,function () {
    if(gamePlaying){ //als mijn gameplaying true is dan... (is true onder init)
        var dice=Math.floor(Math.random()*6)+1; //altijd +1 bijzetten, zodat hij niet van 0 begint

        //resultaat weergeven
        var diceDOM=document.querySelector(`.dice`);
        diceDOM.style.display=`block`; //block: hier zet je de non display uit initfunctie terug op actief. Hij zal dus de image tonen
        diceDOM.src=`dice-`+dice+`.png`; //dice-5.png hier maak je de afbeelding van de dobbelsteen variabel

        //updaten van scores indien het nummer GEEN 1 WAS
        //SCORE UPDATEN
        if(dice!==1){
            roundScore+=dice; //telkens als er geklikt wordt op button roll, telt hij de score op
            document.querySelector(`#current-`+activePlayer).textContent=roundScore; //current is altijd 0 om te beginnen. TextContent wordt opgevuld met roundscore
        }else{
            //hier komt de code voor de beurt voor de andere speler.
            /*roundScore=0;
            document.querySelector(`#current-`+activePlayer).textContent=roundScore;*/
            nextPlayer();
        }
    }
}); //hier schrijf je de functie van de dobbelsteen
document.querySelector(`.btn-hold`).addEventListener(`click`,function (){
    if(gamePlaying){
        //current score overdragen naar scores
        scores[activePlayer]+=roundScore;

        //updaten van het scherm
        document.querySelector(`#score-`+activePlayer).textContent=scores[activePlayer];

        //checken of 100 is bereikt (winst)
        if(scores[activePlayer]>=100){
            document.querySelector(`#name-`+activePlayer).textContent=`Winner`;
            document.querySelector(`.dice-`).style.display=`none`;
            document.querySelector(`.player-`+activePlayer+`-panel`).classList.add=(`winner`);
            document.querySelector(`.player-`+activePlayer+`-panel`).classList.remove=(`active`);
            gamePlaying=false;
        }else{
            //code voor andere speler.
            nextPlayer();
        }
    }
});
function init() {
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector(`.dice`).style.display=`none`;
    document.getElementById(`score-0`).textContent=`0`;
    document.getElementById(`score-1`).textContent=`0`;
    document.getElementById(`current-0`).textContent=`0`;
    document.getElementById(`current-1`).textContent=`0`;
    document.getElementById(`name-0`).textContent=`LEEG`;
    document.getElementById(`name-1`).textContent=`LEEG`;
    document.querySelector(`.player-0-panel`).classList.remove(`winner`); //hier zal javascript iemand actief/nonactief zetten
    document.querySelector(`.player-0-panel`).classList.remove(`active`);
    document.querySelector(`.player-1-panel`).classList.remove(`winner`);
    document.querySelector(`.player-1-panel`).classList.remove(`active`);
    document.querySelector(`.player-0-panel`).classList.add(`active`); //hier voeg je het active-element toe
}
