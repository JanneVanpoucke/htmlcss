//hide event met selectoren

/*
$(document).ready(function(){
    $(`button`).click(function () {
       $(`.box:odd`).hide();
    });
});*/
//injecteren van html
$(document).ready(function() {
    $(`button`).click(function () {
        $(`.box:odd`).html(`<h2>html injectie vanuit javascript</h2>`);
    });
});