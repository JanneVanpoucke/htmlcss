var hoeveelGetallen = parseInt(prompt(`Hoeveel getallen wil je ingeven?: `));
var som = 0;



for(var i=1; i<=hoeveelGetallen;i++){
    var getal = parseInt(prompt(`Geef getal ${i} in: `));
    som = som + getal;
}
document.write(`De totale som van ${hoeveelGetallen} is ${som}.`);