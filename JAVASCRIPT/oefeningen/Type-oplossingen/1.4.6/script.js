function verwijderSpaties(tekenReeks){
	let tekstKarakter = '';
	let nieuweTekenreeks = '';
	let start = 0;
	let lengte = tekenReeks.length;

	while(start != lengte){
		tekstKarakter = tekenReeks[start];
		if(tekstKarakter != ' '){
			nieuweTekenreeks = nieuweTekenreeks + tekstKarakter;
			start +=1;
		}else{
			start +=1;
		}
	}
	return nieuweTekenreeks;
}

let zin = prompt('Geef een zin in:');
document.write(verwijderSpaties(zin));