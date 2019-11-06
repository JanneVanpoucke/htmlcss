function maximumReeks(reeks){
	let teller = 0;
	let grootsteGetal = 0;
	let lengteReeks = reeks.length;

	while(teller != lengteReeks){
		let hulpGetal = reeks[teller];
		if(hulpGetal >= grootsteGetal){
				grootsteGetal = hulpGetal;
			teller+=1;
		}

		else{
			teller+=1;
		}
	}
	return grootsteGetal;

}

let mijnReeks = [];
let aantalGetallen;
aantalGetallen = parseInt(prompt('Hoeveel getallen wenst u in te geven?'));


for(let x=0;x < aantalGetallen;x++){

	mijnReeks.push(parseInt(prompt('Geef een getal in')));
}

document.write(maximumReeks(mijnReeks));


/**minimum*/

function minimumReeks(reeks){
	let teller = 0;
	let kleinsteGetal = reeks[teller];
	let lengteReeks =  reeks.length;

	while(teller != lengteReeks){
		let hulpGetal = reeks[teller];
		if(hulpGetal <= kleinsteGetal){
			kleinsteGetal = hulpGetal;
			teller+=1;
	}else{
		teller+=1;
	}
	}


	return kleinsteGetal;
}

let mijnReeks2 = [];
aantalGetallen = parseInt(prompt('Hoeveel getallen wenst u in te geven?'));


for(let x=0;x < aantalGetallen;x++){

	mijnReeks2.push(parseInt(prompt('Geef een getal in')));
}

document.write(minimumReeks(mijnReeks2));

