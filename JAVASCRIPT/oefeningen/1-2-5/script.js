var print = ``;
var x=0;

for(var x=0;x<=99;x++){
    if(x<10){
        print = print + `0` + x + `,`;
    }
    else{
        print = print + 0 + x + `,`;
    }
}
print = print.substring(0, print.length - 1); //print is hier de string. We starten aan 0 index tot de lengte van de printstring min 1
console.log(print);