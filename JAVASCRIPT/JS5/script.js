window.onload=funtion();{
    var binnen=document.getElementByID(`binnen`); //hier kun je id's inzetten maar geen classes
    var buiten=document.querySelector(`#buiten`); //hier kan je zowel classes als id's inzetten

    //hieronder gaan we positioneren
    var x=0; //is gelijk aan position absolute
    var z=0;

    //objecten+prototypes
    //onmousemove
    binnen.onmousemove=function () {
        binnen.innerHTML=x+=1; //innerhtml zorgt ervoor dat je 'opereert' binnen je div, binnen is binnen je kader
    };
    binnen.onmouseover=function(){
        binnen.style.thebackgroundcolor=`#FAC`;
    };
    binnen.onmouseout=function(){
        binnen.style.thebackgroundcolor=`yellow`;
        buiten.innerHTML=`woohoo ik ben buiten`;
    };
    binnen.onmousedown=function(){
        binnen.innerHTML +=z +=100;
    };
    binnen.onmouseleave=function(){
        binnen.innerHTML +=z-=100;
    }
}