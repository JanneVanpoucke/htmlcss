$( document ).ready(() => {

    $( "form" ).submit(function(e) {
        e.preventDefault();

        const aantal = parseInt($("#aantalGetallen").val());

        // Just to be safe!
        if (isNaN(aantal))
            return alert("Invalid number");

        let array = [];

        for (let i = 0; i < aantal; i++) {
            let nr = NaN;
            while(isNaN(nr))
                nr = parseInt(prompt(`Geef getal ${i + 1} in.`));

            array.push(nr);
        }

        let op = $("#optelling");
        let ver = $("#vermenevuldiging");
        op.html(`${ array.join(" + ") } = ${ som(array) }`);
        ver.html(`${ array.join(" x ") } = ${ vermenevuldiging(array) }`);

        op.css("color", "red");
        ver.css("font-weight", "bold")
    })

});

function som(arr) {
    let som = 0;
    arr.map(i => som += i);
    return som;
}

function vermenevuldiging(arr) {
    let totaal = 1;
    arr.map(i => totaal *= i);
    return totaal;
}
