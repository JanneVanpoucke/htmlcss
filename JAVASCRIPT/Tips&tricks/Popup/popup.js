function mouseDown(e) { //e komt binnen als je de toets indrukt
    const popup = document.getElementById("popup");
    if (e.button == 0) { //moet op nul staan, want dit is de standaard state van een button, maar het is het klikevent die de state (uit of aan (toggle)) bepaalt
        popup.style.visibility = "visible";
        popup.style.left = e.clientX +"px"; //hiermee wordt je laatste positie overschreven
        popup.style.top = e.clientY +"px";
    }
}
function init() {
    const area = document.getElementById("area");
    area.addEventListener("mousedown", mouseDown); //op het moment dat je klikt (=mouse-event), voeren we de mousedown uit
}
window.addEventListener("load", init);