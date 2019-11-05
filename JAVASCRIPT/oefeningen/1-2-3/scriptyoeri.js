var aantal = parseInt(prompt("geef het aantal sterren: "));
var sterren = "";
var ster = "*";
for(var i = 1;i<=aantal;i++){
    sterren = sterren + ster;
    document.write(sterren + "<br>");
    if(aantal == sterren.length){
        for(var y=aantal;y>=0;y--){
            sterren = sterren.slice(0,y);
            document.write(sterren + "<br>");
        }
    }
}