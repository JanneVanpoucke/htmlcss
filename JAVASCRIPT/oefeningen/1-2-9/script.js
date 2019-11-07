eindGetal=parseInt(prompt(`Geef een eindgetal in: `));
print=``;

for(i=0;i<eindGetal;i++){
    if(i%i==0){
        i+=1;
    }
    else{
        print+=i;
    }
}
console.log(print);