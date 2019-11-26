
var hoeveelGetallen = parseInt(prompt("Hoeveel getallen wil je ingeven?:"));
var arrGetallen= [];

for(i=0;i<hoeveelGetallen;i++){
    var getallen = parseInt(prompt("Geef getal in: "));
    arrGetallen.push(getallen);
}

// function Tonen() {
//     document.getElementById("resultaat").innerHTML = arrGetallen.join(" ");
function Toonsom() {
    document.getElementById("optelling").innerHTML = arrGetallen.join("+");
    document.getElementById("isgelijkaan").innerHTML="=";
    document.getElementById("plus").innerHTML=arrGetallen.reduce(SumofArray);
}
function Toonvermenigvuldiging() {
    document.getElementById("vermenigvuldiging").innerHTML = arrGetallen.join("x");
    document.getElementById("isgelijkaantwee").innerHTML="=";
    document.getElementById("maal").innerHTML=arrGetallen.reduce(MultiplyofArray);
}
$(document).ready(function(){
    $(`button`).click(function () {
        $(`.bullet`).css("list-style-type","circle");
        $(`.bullet`).css("display","list-item");
        $(`.bullet`).css("list-style-position","inside");
        $(`.red`).css("color","red");
        $(`.bold`).css("font-weight","bold");
    });
});

function SumofArray(sum, num) {
    return sum + num;
}
function MultiplyofArray(multiply, num) {
    return multiply * num;
}

