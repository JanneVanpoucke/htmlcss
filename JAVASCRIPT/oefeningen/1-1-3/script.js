var minLeeftijd = 18;
var geboorteJaar = parseInt(prompt("Geef uw geboortejaar in:"));
var lopendJaar = parseInt(prompt("Geef het lopend jaar in:"));
var Totaal = lopendJaar - geboorteJaar;

if(Totaal>=18) {
    document.write(`Vanaf nu kan en mag ik alles zelf beslissen.`);
}
else {
    document.write(`Gelukkig zijn mijn ouders er.`);
}