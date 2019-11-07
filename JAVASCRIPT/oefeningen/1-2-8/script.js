eindGetal=parseInt(prompt(`Geef een eindgetal in:`));
print=``;
teller=1;

for(var i=1;i<eindGetal;i++){
    teller*=2;
    if(teller<eindGetal){
        print= print+teller+`,`;
    }

}
console.log(print.substring(0,print.length-1));