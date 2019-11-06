//declareren van variabelen

/*var test;
var test2 = []

//declareren van een object
var tom = { //accolades geven al mee dat het gaat om een object
    naam: `Tom`,
    geboortedatum: 1973,
    geslacht: `M`
}*/
var Persoon=function (naam, geboortedatum, geslacht,plaats) { //constructor is hetgene wat je meegeeft in een object. Hier dus naam, geboortedatum, geslacht en plaats.
    this.naam= naam;
    this.geboortedatum= geboortedatum;
    this.geslacht=geslacht;
    this.plaats=plaats;
    }


Persoon.prototype.berekenLeeftijd=function () {
    console.log(2019-this.geboortedatum); //this.geboortedatum maakt gebruik van jouw gedeclareerde erboven
}
var yoeri=new Persoon(`Yoeri`, 1983, `M`,`Roeselare`);
var janne=new Persoon(`Janne`,1991,`V`,`Roeselare`);

yoeri.berekenLeeftijd();
janne.berekenLeeftijd();
console.log(yoeri.plaats); //variable wordt niet automatisch uitgevoerd, function wel dus bij een variabele moet je console.log zetten
console.log(janne.plaats);