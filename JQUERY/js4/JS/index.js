//methode zonder chaining
$(document).ready(function() {
    $(`button`).click(function () {
        $(`.box`).html(`<h1>Deze tekst komt uit Javascript</h1>`);
    });
});
//methode met chaining(animatie)
$(document).ready(function() {
    $(`button`).click(function () {
        $(`.box:odd`).css(`color`,`red`).css(`border`,`2px solid red`).hide(5000); //mag pas volledig verborgen worden na 5000 seconden, kader gaat naar links omdat je document links boven start
    });
});