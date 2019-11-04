var maxSter = parseInt(prompt(`Geef het maximum aantal sterren in: `));


for(var i=1; i<=maxSter; i++){ //i=1 aan start loop;i loopt maxSter keer;loop wordt telkens met 1 opgeteld
    for(var j=1; j<=i;j++) { //j=1 aan start loop; zolang j kleiner of gelijk aan i is, loopt de loop;loop wordt telkens met 1 opgeteld
        document.write(`*`); //per keer dat de loop loopt, wordt een ster afgedrukt
    }
    document.write(`<br\>`); //dit is geen break, maar enter naar de volgende lijn. Je kan ook /n gebruiken.
}