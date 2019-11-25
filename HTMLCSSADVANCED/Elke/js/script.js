// function Verwijderen() {
//     var x = document.querySelector(".weg");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }}
var arrResultaat = [];
function Opnieuw() {
    arrResultaat = [];
    document.getElementById("resultaat").innerHTML = "Druk op 'GEEF CODE' om de HTML code hier weer te geven.;"
}
function Tekst() {
    var tekst = prompt("Gelieve uw tekst hier in te geven", "text");
    if (tekst != null) {
        arrResultaat.push("&lt;input type="+ tekst +">" + "<br/>");
    }
}
function Checkbox(){
    var aantalChecks = prompt("Hoeveel checkboxen wilt aanmaken?", "1");
    for(var i=1; i<=aantalChecks;i++){
        var tekstCheckbox = prompt("Welke tekst moet er bij de checkbox staan?");
        arrResultaat.push(" &lt;input type='checkbox'>" + tekstCheckbox+ "<br>");
        tekstCheckbox = ""
    }
}
function Radio() {
    var aantalRadio = prompt("Hoeveel radiobuttons wilt aanmaken?", "1");
    for(var i=1; i<=aantalRadio;i++){
        var tekstRadio = prompt("Welke tekst moet er bij de radiobutton staan?");
        arrResultaat.push(" &lt;input type='\'radio\''>" + tekstRadio+ "<br>");
        tekstRadio = ""
    }}
function Kleur(){
    arrResultaat.push(" &lt;input type='color'&gt;" + "<br>");
}
function LokaleTijd() {
    arrResultaat.push(" &lt;input type='datetime-local'&gt;" + "<br>");
}
function Datum(){
    arrResultaat.push("&lt;input type='date'&gt;" + "<br>");
}
function Email(){
    arrResultaat.push(" &lt;input type='email'&gt;" + "<br>");
}
function Afbeelding(){
    arrResultaat.push(" &lt;input type='image'&gt;" + "<br>");
}
function Month(){
    arrResultaat.push(" &lt;input type='month'&gt;" + "<br>");
}
function Nummer(){
    arrResultaat.push(" &lt;input type='number'&gt;" + "<br>");
}
function Password(){
    arrResultaat.push(" &lt;input type='password'&gt;" + "<br>");
}
function Tijd(){
    arrResultaat.push(" &lt;input type='time'&gt;" + "<br>");
}
function Afstand(){
    arrResultaat.push(" &lt;input type='range'&gt;" + "<br>");
}
function Search(){
    arrResultaat.push(" &lt;input type='search'&gt;" + "<br>");
}
function Url(){
    arrResultaat.push(" &lt;input type='url'&gt;" + "<br>");
}
function Week(){
    arrResultaat.push(" &lt;input type='week'&gt;" + "<br>");
}
function Tel(){
    arrResultaat.push(" &lt;input type='tel'&gt;" + "<br>");
}
function Submit(){
    arrResultaat.push(" &lt;input type='submit'&gt;" + "<br>");
}
function Button() {
    var knop = prompt("Wat moet er op de knop staan?", "Button");
    if(knop!=null){
        arrResultaat.push("&lt;button&gt"+ knop +"&lt;/button&gt" + "<br/>");
        knop = ""
    }}
function Tonen() {
    document.getElementById("resultaat").innerHTML = arrResultaat.join(" ");
}