var leeftijdGebruiker = parseInt(prompt("Geef uw leeftijd in:"));

if(leeftijdGebruiker >= 18){
    document.write(`Je bent ${leeftijdGebruiker} jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.`)
}
else{
document.write(`Om  deel  te  nemen  aan  de  spelen  van  de Nationale Loterij moet je minimum 18 jaar oud zijn.`)
}