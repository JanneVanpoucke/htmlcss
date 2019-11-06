/*
Schrijf een programma die de getallenreeks van Fibonacci opsomt. 
 Vraag aan de gebruiker hoeveel getallen er dienen te worden 
weergegeven.  Voorbeeld:  0, 1, 1, 2, 3, 5, 8, 13, 21, 
*/

let aantalGetallen = parseInt(prompt('Geef het aantal te tonen getallen in:'));
let getalEen = 0;
let getalTwee = 1;
let teller = 1;
let x = 0;
afdrukOpscherm = "0,1,";
for(x=0;x < aantalGetallen;x++){
	x = getalEen + getalTwee;
	if(teller < aantalGetallen && x < aantalGetallen){
		afdrukOpscherm = afdrukOpscherm + x + ",";
	}else if(x < aantalGetallen){
		afdrukOpscherm = afdrukOpscherm + x;
	}
	getalEen = getalTwee;
	getalTwee = x;
	teller = teller + 1;
}
document.write(afdrukOpscherm.substring(0,afdrukOpscherm.length-1));