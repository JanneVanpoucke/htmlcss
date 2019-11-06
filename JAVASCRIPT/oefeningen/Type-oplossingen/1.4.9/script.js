function dectohex(decimaalGetal){
    let hexReeks = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let mijnReeks = [];
    let rest = 0;
    let teller=0;
    let resultaat =[];
    while(decimaalGetal / 16 != 0){
        rest = mijnReeks.push(decimaalGetal%16);
        decimaalGetal = Math.floor(decimaalGetal /16);
        resultaat.unshift(hexReeks[mijnReeks[teller]]);
        teller++;
    }
    resultaat = resultaat.toString();
    resultaat = resultaat.replace(',','');
    return resultaat;
}

/** PROGRAMMA **/
decimaalGetal = parseInt(prompt("Geef een decimaal getal in:"));
document.write(dectohex(decimaalGetal));
