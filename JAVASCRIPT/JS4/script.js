window.onload=function(){ //hierdoor zal je window alijd aangesproken worden
    document.querySelector('#resultaat').textContent=`Het document is geladen`;
}
function Naam(){
    console.log(document.querySelector(`#mijnveld`).value);

}