var geboorteJaar = parseInt(prompt("Geef je geboortejaar in: "));
var lopendJaar = parseInt(prompt("Geef het lopend jaar in: "));
var totaalJaar= lopendJaar-geboorteJaar;

if(totaalJaar>=18){
    document.write(`Vanaf nu mag, kan en beslis ik alles binnen de wettelijke grenzen`);
}
else if(totaalJaar<0){
    document.write(`Je leeftijd kan niet onder nul zijn.`);
}
else{
    document.write(`Gelukkig heb ik mijn ouders die alles voor me regelen`);
}