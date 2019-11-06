function omtrekVierkant(zijde){
	return zijde * 4;
}
function oppervlakteVierkant(zijde){
	return zijde * zijde;
}
function omtrekRechthoek(lengte,breedte){
	return (lengte + breedte)*2;
}
function oppervlakteRechthoek(lengte,breedte){
	return (lengte*breedte);
}
function omtrekRuit(zijde){
	return zijde*4;
}
function oppervlakteRuit(basis, hoogte){
	return basis * hoogte;
}
function omtrekGelijkzijdigeDriehoek(zijde){
	return 3 * zijde;
}
function oppervlakteGelijkzijdigeDriehoek(basis,hoogte){
	return (basis * hoogte)/2;
}
function omtrekParallellogram(basis,zijde){
	return (basis + zijde) * 2;
}
function oppervlakteParallellogram(basis, hoogte){
	return (basis * hoogte);
}
function omtrekCirkel(straal){
	return (2 * Math.PI * straal);
}
function oppervlakteCirkel(straal){
	return Math.PI * straal * straal;
}

