function updateDungeonsandDragons() {
    const xhr = new XMLHttpRequest(); //extended mark-up language
    xhr.onload = onLoad; //onLoad=doe iets tijdens het laden
    xhr.open("GET", "http://dnd5eapi.co/api/monsters"); //value is hier pagina 2
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

window.addEventListener("load");