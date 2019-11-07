let dragging = false; //let omdat dit ES6 is
let x0=0,y0=0,x=100,y=100; //100 is de positie waar de drag me zal starten. Initiele startpositie=100 en x 0 verwijst naar de vorige positie
let layer;
function init(){ //2
    layer = document.getElementById("layer"); //2.1
    layer.addEventListener("mouseover",mouseOver); //2.2 //De verschillende mouses zijn meerdere 'events' aan een div-tag
    layer.addEventListener("mouseout",mouseOut); //2.3  //Eerste mouse is parameter(naam), tweedemouse is de actie die moet gebeuren
    layer.addEventListener("mousedown",mouseDown); //2.4
    document.addEventListener("mousemove",mouseMove); //2.5
    document.addEventListener("mouseup",mouseUp); //2.6

    layer.style.visibility="visible";
    layer.style.top = y+"px"; //hier wordt bepaald waar je x- en y-as is. startpunt is op y-pixels, bovenaan worden die variabelen gedeclareerd
    layer.style.left = x+"px";
}
function mouseMove(e) { //op de e-parameter, komen de coordinaten die je opvangt met de mouseDown van x en y binnen
    if(!dragging) return;
    let difX = e.clientX - x0; //x0 was de vorige waarde. De beginpositie verandert
    let difY = e.clientY - y0;
    x0 = e.clientX;
    y0 = e.clientY;
    x += difX; //verschil van x en y optellen
    y += difY;
    layer.style.top = y+"px"; //na het uitrekenen van het verschil hebben we de nieuwe positie
    layer.style.left = x+"px";
}
function mouseOver(e) { //als je over drag me gaat, verandert je cursor (zelfde als css). Het woordje style moet een belletje doen rinkelen.
    layer.style.cursor="move";
}
function mouseOut(e) { //als je niet klikt, drag je niet meer
    layer.style.cursor="auto";
}
function mouseDown(e) {
    dragging = true;
    x0 = e.clientX; //hier stellen we x=0 gelijk aan het moment waarop we op de drag me klikken. client=window. De coordinaten van de locatie waar je de drag me sleep in het window worden opgevangen.
    y0 = e.clientY;
    e.preventDefault(); //hiermee verander je de basisfunctionaliteit. Hierdoor slepen we niet, maar vangen we enkel de coordinaten op van x en y. Als je dit niet doet, blijft je drag me plakken aan je muis. De knop blijft ingedrukt
}
function mouseUp(e) {
    dragging =false;
}
window.addEventListener("load", init); //1