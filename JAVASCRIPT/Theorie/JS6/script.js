var numClicks=0; //globale variable

window.onload=function () {
    var resultaat=document.querySelector(`#resultaat`); //block scoped variabele
    var mijnbutton=document.querySelector(`#btnStart`)
    resultaat.addEventListener(`click`,function () {
        numClicks++; //++ is eentje verhogen
        console.log(numClicks);
        resultaat.innerHTML=numClicks+`keer geklikt`;

    },false); //altijd afsluiten!
}