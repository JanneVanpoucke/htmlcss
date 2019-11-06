/**
Schrijf een programma die het volgende op het scherm weergeeft:
• De gebruiker geeft het maximum aantal sterren in: (bijv. 5)
*
**
***
****
*****
**/

const aantalSterren = parseInt(prompt('Geef het maximum aantal sterren in:'));
let ster = '*';
let totaalAantalSterren = ster;

for(let i=1;i <= aantalSterren; i++){
	document.write(ster);
	ster += '*';
	document.write("<br>");
}