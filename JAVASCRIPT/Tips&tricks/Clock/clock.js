function updateTime() { //3 volgorde van uitvoering
    const clock = document.getElementById("clock"); //hier vind je je clock ID (div op html pagina)
    const now = new Date(); //hier declareer je date
    clock.innerHTML = now.toLocaleTimeString(); //tolocaletimestring is een prototype van date, dit kan je alleen gebruiken als je date gedeclareerd hebt. Locale is belangrijk, want hierdoor wordt de datum/uur aangepast op de locatie waar de pagina bekeken wordt.
}
function init() { //2
    updateTime();
    setInterval(updateTime, 1000); //zonder dit zal de klok geen seconde per seconde naar boven gaan
}
window.addEventListener("load", init); //1