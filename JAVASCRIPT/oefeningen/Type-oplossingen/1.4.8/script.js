
/**FUNCTIE **/
function backArray(reeks) {
    let teller = 0;
    let resultaat = [];
    let lengteReeks = reeks.length;

    while(teller < lengteReeks){
        resultaat.push(reeks[lengteReeks - 1 - teller]);
        teller++;
    }
    return resultaat;
}

/**PROGRAMMA**/
let mijnReeks = [];
let aantalGetallen = parseInt(prompt("Hoeveel getallen wenst u in te geven?"));
for(let x=0;x<aantalGetallen;x++){
    mijnReeks.push(parseInt(prompt("Geef een getal in")));
}
document.write(backArray(mijnReeks));
