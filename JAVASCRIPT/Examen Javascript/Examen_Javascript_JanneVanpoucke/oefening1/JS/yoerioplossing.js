var ptagsom = document.createElement("li");
var ptagvermenigvuldiging = document.createElement("li");
var aantalGetallen = parseInt(prompt("Geef het aantal getallen in: "));
var optelSom = []
var stringVS = ""
var stringVV = ""
function som(a){
    const sum = a.reduce((total, n) => total + n, 0)
    return sum
}
function vermenigdvuldigen(a) {
    const sum = a.reduce((total) => total * total)
    return sum
}
for(var i = 1;i<=aantalGetallen;i++) {
    var getal = parseInt(prompt("Geef een getal in: "));
    optelSom.push(getal);
    console.log(optelSom)
    if(i < aantalGetallen) {
        stringVS += getal + " + "
        stringVV += getal + " x "
    }else{
        stringVS += getal + " = "
        stringVV += getal + " = "
    }
}
//document.write(vermenigdvuldigen(optelSom))
ptagsom.style.color='red';
ptagsom.style.listStyle='circle outside';
ptagsom.append(stringVS + som(optelSom))
document.body.appendChild(ptagsom)
console.log(ptagsom)
ptagvermenigvuldiging.style.fontWeight='900'
ptagvermenigvuldiging.style.listStyle='circle outside';
ptagvermenigvuldiging.append(stringVV + vermenigdvuldigen(optelSom))
document.body.appendChild(ptagvermenigvuldiging)