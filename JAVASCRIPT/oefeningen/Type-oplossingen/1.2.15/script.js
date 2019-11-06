/*
Schrijf een programma waarin je aan de gebruiker vraagt 
hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal 
van alle ingegeven getallen op het scherm. 
 De totale som van x getallen is x. 
 Voorbeeld: 
 Hoeveel getallen?: 3 
 Geef getal 1 in: 
 Geef getal 2 in: 
 Geef getal 3 in 
 De totale som van 3 getallen is x. 
 Het gemiddelde van de 3 getallen is x 
 
*/

let som = 0;
let teller = 1;
let gemiddelde = 0;

aantalGetallen = parseInt(prompt('Geef getal in:'));
while(teller <= aantalGetallen){
	let getal = parseInt(prompt('Geef getal in'));
	som += getal;
	teller++;
}
document.write(`De totale som van: ${aantalGetallen} getallen is ${som}<br>`);
gemiddelde = som/aantalGetallen;
document.write(`Het gemiddelde van de ${aantalGetallen} getallen is ${gemiddelde}`);