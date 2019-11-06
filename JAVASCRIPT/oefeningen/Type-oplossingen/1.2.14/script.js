/*
Schrijf een programma die een aantal getallen inleest en 
eindigt wanneer de gebruiker een negatief getal ingeeft. 
 Schrijf daarna de som van de getallen op het scherm. 
*/
let som = 0;
let getal = parseInt(prompt('Geef een getal in'));
while(getal >0){
	som += getal;
	getal = parseInt(prompt('Geef een getal in:'));
}
document.write(`De som van de getallen is ${som}`);