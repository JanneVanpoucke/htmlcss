function macht(grondtal, exponent){
	let hulpgetal = grondtal;
	let x=1;
	while(x < exponent){
		grondtal = grondtal * hulpgetal;
		x+=1;
	}
	return grondtal;
}

let grondtal = parseInt(prompt('Geef een grondtal in:'));
let exponent = parseInt(prompt('Geef een exponent in:'));

document.write(macht(grondtal, exponent));