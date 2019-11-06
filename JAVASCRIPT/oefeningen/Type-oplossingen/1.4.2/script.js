/*

Schrijfeenfunctiedieinstaatisomtebepalenwanneereenjaartaleenschrikkeljaaris.
*/

function schrikkeljaar(jaar){
	if(jaar%400 == 0){
		return true;
	}else if(jaar%100 == 0){
		return false;
	}else if(jaar%4 == 0){
		return true;
	}else{
		return false;
	}
}

let jaartal = parseInt(prompt('Geef een jaartal in:'));

if(schrikkeljaar(jaartal) == true){
	document.write('Dit is een schrikkeljaar');
}else{
	document.write('Dit is geen schrikkeljaar');
}