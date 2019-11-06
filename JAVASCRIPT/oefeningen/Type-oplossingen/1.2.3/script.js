/*
Schrijf een programma die het volgende op het scherm weergeeft:
 De gebruiker geef een even aantal even lijnen in.
*
**
***
****
*****
*****
****
***
**
* 
*/

const aantalLijnen= parseInt(prompt('Geef een even aantal lijnen in:'));
const helft = aantalLijnen/2;
console.log(helft);
let ster = '*';

for(let i=1;i <= helft; i++){
	document.write(ster);
	ster += '*';
	document.write("<br>");
}
ster = ster.substring(0, ster.length - 1)
for(let i=1;i <= helft; i++){
	document.write(ster);
	ster = ster.substring(0, ster.length - 1);
	console.log(ster);
	document.write("<br>");
}