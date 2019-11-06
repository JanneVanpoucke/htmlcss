/*
Schrijf een programma die de facultateit van een getal weergeeft.
  De faculteit van 5 is bijvoorbeeld: 
  5x4x3x2x1 = 120 
 Vraag dit getal aan de gebruiker 
*/
let faculteit = 1;
let teller = 1;
let afdruk = '';

const getal = parseInt(prompt('Geef getal in'));
while(teller <= getal){
	faculteit *= teller;
	afdruk += teller + 'x';
	teller++;
}
document.write(`De faculteit van ${getal} is ${faculteit}<br>`);
document.write(afdruk.substring(0,afdruk.length-1) + "=" + faculteit);