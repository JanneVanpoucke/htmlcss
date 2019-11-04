// var naam="Janne";
// var familieNaam="Vanpoucke";
// var geboorteJaar=1991;
// var functie='student';

// var dag="'s avonds";
// var dag='s avonds';
// var gehuwd=false;
// var niets;
// console.log(naam);
// console.log(familieNaam);
// console.log(geboorteJaar);
// console.log(functie);
// console.log(dag);
// console.log(gehuwd);
// console.log(niets);

// niets = "niets is niet langer niets";
// console.log(niets);

// document.write(naam + ' '+ familieNaam+"<br>");

// console.log(naam.concat(' ', familieNaam));
// document.write(naam.concat(' ', familieNaam));

// //ES5
// document.write("Voornaam: "+naam+"Familienaam: "+familieNaam+"<br>");
// //ES6: werken met backtics en dollartekens
// document.write(`Voornaam: ${naam} Familienaam: ${familieNaam}`);

// var ingave=prompt("Geef uw voornaam in:");
// document.write(`Voornaam: ${ingave}`+ "<br>");
// document.write(typeof(ingave)); //hiermee check je wat de gebruiker ingeeft: integer of string - altijd een string

// var getal1=parseInt(prompt("Geef getal 1 in:"));
// var getal2=parseInt(prompt("Geef getal 2 in:"));
// var resultaat;
// resultaat=getal1+getal2;
// document.write(resultaat + <br>);
// document.write(typeof(getal1) + <br>);
// document.write(typeof(getal2) + <br>);
// document.write(typeof(resultaat));


//confirm al een boolean van true or false
// if(window.confirm("ben je zeker dat je dit wil verwijderen")){
// 	deleteIets(id);
// }

// var naam=prompt("Geef uw naam in:");
// var beroep=prompt("Maak een keuze: bediende, arbeider,werkloos");
// if(beroep=="bediende"){
// 	document.write(`<h2 class="mijnclass">het beroep van ${naam} is ${beroep}<h2>`);
// }
// else if(beroep=="arbeider"){
// 	document.write("het beroep van "+ naam +"is"+berope)
// }
// else{
// 	document.write(`Het beroep van ${naam} is ${beroep}`)
// }

/*var getal1 = 5
var getal2 = 6

if(getal1<getal2){
	//code
	document.write("getal1 is groter");
}
else{
	document.write("getal2 is groter");
}

getal1<getal2 ? //vraagteken staat voor 'dan'
	document.write("getal1 is groter"): //het vraagteken moet gecombineerd worden met dubbelepunt. Hierna komt de conditie
	document.write("getal2 is groter");*/

/*var onderwijs='vdab';
switch(onderwijs){ //switch: zelfde principe als if en else, maar voor meer dan 4 condities is dit handiger
	case 'vdab':
		document.write('Cursus door de vdab');
		break;
	case 'syntra':
		document.write('Cursus door syntra');
		break;

	case 'cvo':
		document.write('Cursus door cvo');
		break;

	case 'vives':
		document.write('Cursus door vives');
		break;
	default:
		document.write('Gegeven door een andere instelling');
}*/

//eigen functie schrijven

/*function berekenLeeftijd(geboorteJaar, huidigJaar){
	return huidigJaar-geboorteJaar;
}

var gj=parseInt(prompt("geef uw geboortejaar in:")); //parseInt maakt een integer van de input
var hj=2019;
var resultaat=berekenLeeftijd(gj,hj) //gj wordt geinjecteerd in je functie op plaats geboorteJaar. De naam doet er dus niet toe

var start = Date.now();
document.write(start)

resultaat >=0 ? 
	document.write(`Het aantal jaren tussen ${hj} en ${gj} is: ${resultaat}`):
	document.write(`Uw geboortejaar kan niet groter zijn dan het huidige jaar`);
*/

//arrays schrijven

/*var cursisten=['Tom','Tim','Bart','Els'];
var cursusJaar= new Array(2017,2018,2019,2020);

console.log(cursisten);
console.log(cursusJaar);
console.log(cursusJaar.lenght);
cursisten.push('Marieke'); //vooraan de array
console.log(cursisten);
cursisten.unshift('Thomas'); //achteraan de array
console.log(cursisten);
cursisten.pop(); //laatste in array verwijderen
console.log(cursisten);
cursisten.shift();
console.log(cursisten); //eerste in array verwijderen

console.log(cursisten.indexOf('Bart')); //geeft het indexcijfer weer van 'Bart'. Interessant voor loops

console.log(cursisten.join()); //van array naar string
/*console.log(curisten.split(','));*/ //van string naar array
/*console.log(cursisten.reverse());
console.log(cursisten.sort());
console.log(cursisten.toString()); //zelfde als join

console.log(cursisten.splice(2,1,'Janne'));
console.log(cursisten);*/

//loops
/*for(var i=1; i<=10;i++){
	console.log(i);
}
for(var i=1; i<=10;i+=2){
	console.log(i);
}
for(var i=1; i<=10;i--){ //oneindige lus
	console.log(i);
}
for(var i=10; i>=1;i--){ //oplossing voor oneindige lus
	console.log(i);
}
for(var i=10; i>=1;i-=2){
	console.log(i);
}

//lengte array tellen
var cursisten=['Tom','Tim','Bart','Els']
for(var i=1;i<cursisten.length;i++){
	console.log(cursisten[i]);
}

//for each loop
cursisten.forEach(function(cursist) { //voor elke cursist in cursisten, toon mij de cursist
	console.log(cursist);
});*/

//while loop
var i=0;
while(i < cursisten.length){
	console.log(cursisten[i]);
	i++;
}