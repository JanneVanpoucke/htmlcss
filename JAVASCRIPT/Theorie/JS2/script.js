var naam=prompt("vul uw naam in:")
var weergave="De naam die u invoerde was:" + naam;
/*document.getElementById('resultaat').innerHTML= "<p>"+weergave+"</p>"*///injectie op id

for(var i=1;i<=2;i++){
document.querySelector('.resultaat'+i).textContent="<p>"+weergave+"</p>"
}