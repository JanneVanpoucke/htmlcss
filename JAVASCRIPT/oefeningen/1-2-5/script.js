var print = ``;
var array = []
for(var x=0;x<=100;x++){
    if(x<10){
        print = print + `0` + x + `,`;
    }
    else{
        print = print + x + `,`;
    }
}
array.push(print)
document.write(array)