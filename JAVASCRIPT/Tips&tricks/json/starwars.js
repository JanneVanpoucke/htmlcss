function updateStarwars() {
    const xhr = new XMLHttpRequest(); //extended mark-up language
    xhr.onload = onLoad; //onLoad=doe iets tijdens het laden
    xhr.open("GET", "https://swapi.co/api/people/1"); //value is hier pagina 2
    //xhr.open("GET", "zipcodejson?code=" + this.value, true);
    xhr.send();
}

function onLoad() {
    const name = document.getElementById("name");
    name.options.length = 0; //moet leeg zijn telkens als we beginnen te laden

    const names = JSON.parse(this.responseText); //JSON.parse: vormt alles om tot text zodaning dat je een constante string kan gebruiken

    for (let i = 0; i < names.length - 1; i++) {
        const option = document.createElement('option');
        option.text = names[i].name;
        option.id = names[i].id;
        name.options[i] = option;
    }
}

function init() {
    const nummer = document.getElementById("nummerField");
    nummer.addEventListener("keyup", updateStarwars); //vanaf dat je gelijk welke knop op je toetsenbord loslaat (keyup), gaat er gezocht worden naar de waarde in updateCity
}

window.addEventListener("load", init);