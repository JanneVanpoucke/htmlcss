/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft. 
Vraag aan de gebruiker de 2 getallen  Voorbeeld: 
o Getallen 15 en 27 
o Weergave op het scherm: 
o Het kleinste gemene veelvoud van 15 en 27 is: 135 
*/
let hulp="";
let breukTeller=0;
let eersteGetal=parseInt(prompt('Eerste getal'));
let tweedeGetal=parseInt(prompt('Tweede getal'));
let grootsteGemeneDeler = 0;
let kleinsteGemeenVeelvoud = 0;

if(eersteGetal < tweedeGetal){
	hulp=eersteGetal;
	eersteGetal = tweedeGetal;
	tweedeGetal = hulp;
}
breukTeller = eersteGetal * tweedeGetal;
for(let x=1; x <=eersteGetal;x++){
	if(eersteGetal%x == 0 && tweedeGetal%x ==0){
		grootsteGemeneDeler = x;
	}
}
kleinsteGemeenVeelvoud = breukTeller/grootsteGemeneDeler;
document.write(`Het kleinste gemeen veelvoud van ${eersteGetal} en ${tweedeGetal} is ${kleinsteGemeenVeelvoud}`);