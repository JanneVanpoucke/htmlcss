function init(e) {
   //const dateNode = document.getElementById("date");
   const dateNode = $("date"); //de regel erboven is hetzelfde. Dit is ES6, hierboven is ES5. Dit is je div
   
   const today = new Date(); //variabele waarmee we de datum van vandaag opvangen
   const hour = today.getHours(); //variabele waarmee we de uren van vandaag opvangen
   let greeting ="";
   let className ="";
   if(hour <= 11) {
      greeting = "Goede morgen!";
      className="morning";
   }
   else if(hour <= 16) {
      greeting = "Goede middag!";
      className="noon";
   }
   else {
      greeting = "Goede avond";
      className="evening";
   }
      
   const strongNode = document.createElement("strong"); //door node ben je instaat om tags te injecteren in je html via javascript. strongNode is vetjes zetten
   const greetingNode = document.createTextNode(greeting); //
   const textNode = document.createTextNode(today.toLocaleString()); //hier steken we de dag van vandaag erin
   
   dateNode.appendChild(greetingNode); //hier wordt je 'kindje' greetingNode toegevoegd aan je div. DateNode is je div en parent
   dateNode.appendChild(strongNode);
   strongNode.appendChild(textNode);
   
   let image = "sun.png";
   if(hour < 7 || hour > 20 ) {
      image = "moon.jpg";
   } 
   
   //const imageNode = document.getElementById("img");
   const imageNode = $("img");

   imageNode.setAttribute("src",image); //hier voeg je een attribuut toe aan de Node
   imageNode.setAttribute("width",100);
   imageNode.setAttribute("height",100);

   //dateNode.setAttribute("class",className);
   $("date").setAttribute("class",className); //morning, noon, evening worden hier ingevoegd uit css
}

const $ = function(id) {
	return window.document.getElementById(id);
};

window.addEventListener("load", init);

//als we tags toevoegen gebruik je createElement
//als we kindjes toevoegen gebruik je appendChild
//als we text willen toevoegen, gebruik je createTextNode
