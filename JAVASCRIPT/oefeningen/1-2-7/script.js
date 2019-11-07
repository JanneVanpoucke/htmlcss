eindGetal= parseInt(prompt(`Geef een eindgetal in:`));
print=``;

for(var i=0;i<eindGetal;i++){
    if (i%2==0){
        print+=i + ` `;
    };
}
console.log(print)