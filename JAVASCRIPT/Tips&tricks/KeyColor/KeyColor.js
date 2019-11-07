const colors = { //object te herkennen aan de de accolades
    a : "aqua",
    b : "blue",
    c : "cyan",
    d : "deeppink",
    f : "fuchsia",
    g : "green",
    h : "honeydew",
    i : "indigo",
    k : "khaki",
    l : "lime",
    m : "magenta",
    n : "navy",
    o : "orange",
    p : "purple",
    r : "red",
    s : "silver",
    t : "turquoise",
    v : "violet",
    w : "white",
    y : "yellow",
};
function pressed(opvangLetter) { //hier vangen we de letter die je intikt op
    const c = String.fromCharCode(opvangLetter.which); //als je iets intikt is dit een string, dit wordt omgezet naar de de ascii-tabelwaarde. de which zorgt ervoor dat we de waarde van de toets opvangen. Bv. a, b. Hier is c de a bijvoorbeeld
    const body = document.getElementById("body");
    body.style.backgroundColor = colors[c];
}
function init() {
    document.addEventListener("keypress", pressed); //laadt de pressed-functie
}
window.addEventListener("load", init); //laadt de init-functie

//enter opvangen door chr(13) = charactercode voor enter in de ascii-tabel