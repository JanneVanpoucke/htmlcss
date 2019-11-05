var faculteit = parseInt(prompt(`Geef het getal in waarvan je de faculteit wil: `));
let totaal = 1;

for(var x=1;x<=faculteit;x++){
    totaal = totaal*x;
    document.write(x + `x`);
}
document.write(`=`+ totaal);
