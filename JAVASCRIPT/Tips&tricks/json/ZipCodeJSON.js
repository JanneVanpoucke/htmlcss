function updateCity() {
   if (this.value.length != 4)
      return;
   const xhr = new XMLHttpRequest(); //extended mark-up language
   xhr.onload = onLoad; //onLoad=doe iets tijdens het laden
   xhr.open("GET", "http://www.noelvaes.eu/Ajax/zipcodejson?code=" + //http is de bron waarin gezocht wordt naar postcode/cities
    this.value, true); //value is bijvoorbeeld 8000
   //xhr.open("GET", "zipcodejson?code=" + this.value, true);
   xhr.send(null);
}

function onLoad() {
   const city = document.getElementById("cityField");
   city.options.length = 0; //moet leeg zijn telkens als we beginnen te laden

   const cities = JSON.parse(this.responseText); //JSON.parse: vormt alles om tot text zodaning dat je een constante string kan gebruiken
   
   for (let i = 0; i < cities.length - 1; i++) {
      const option = document.createElement('option');
      option.text = cities[i].name;
      option.id = cities[i].id;
      city.options[i] = option;
   }
}

function init() {
   const zipcode = document.getElementById("zipcodeField");
   zipcode.addEventListener("keyup", updateCity); //vanaf dat je gelijk welke knop op je toetsenbord loslaat (keyup), gaat er gezocht worden naar de waarde in updateCity
}

window.addEventListener("load", init);
