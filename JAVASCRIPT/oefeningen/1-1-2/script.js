var leeftijdGebruiker = parseInt(prompt("Geef uw leeftijd in:"));

if(leeftijdGebruiker >= 18){
    document.write(`Je bent ${leeftijdGebruiker} jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.`);
        var aantalVakjes = parseInt(prompt("Geef aantal bulletinvakjes in:"));
            if(aantalVakjes==12) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is twintig euro.`);
            }
            else if(aantalVakjes == 10) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is achttien euro.`);
            }
            else if(aantalVakjes == 8) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is zestien euro.`);
            }
            else if(aantalVakjes == 6) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is twaalf euro.`);
            }
            else if(aantalVakjes == 4) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is acht euro.`);
            }
            else if(aantalVakjes == 2) {
                document.write(`Je koos ${aantalVakjes}. Kostprijs is vier euro.`);
            }

            else{
                document.write(`Geef correcte bulletin in.`);
            }
}

else{
    document.write(`Om deel te nemen aan de spelen moet je minimum 18 jaar oud zijn.`);
}