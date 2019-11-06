/**
Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft: 
 Voorbeeld: 
o Vraag een getal aan de gebruiker: 
o Wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64 
 o Wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst: 
  1, 2, 4, 8, 16, 32, 64, 128 
**/
let getal = parseInt(prompt('Geef een getal in groter dan 0'));
let res = 1;
document.write(res, ',');
for(i=1; res<=getal;i++){	
	res = res * 2;
	if(res*2 >= getal && res <=getal){	
		document.write(res);
	}
	else if(res < getal){
		document.write(res + ',')
		}	
	
}