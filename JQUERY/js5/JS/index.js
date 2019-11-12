//append after and before,.addClass .removeClass,.toggleClass
/*$(document).ready(function() {
    $(`button`).click(function () {
        $(`.box:first`).append(`<h1>append aan box 1</h1>`).hide(2000);
        $(`.box:last`).after(`<p>AFTER laatste box</p>`);
        $(`.box`).before(`<h2>BEFORE overal</h2>`).css({"background":"yellow","border":"10px solid green"}).hide(5000);
        $(`button`).addClass(`color`);
       /!* $(`button`).removeClass(`color`);*!/ //tegenhanger van addClass
        $(`button`).toggleClass(`color`);
    });
});*/

$(document).ready(function() {
    $(`button`).click(function () {
        $(`.box`).addClass(`color`);
        /* $(`button`).removeClass(`color`);*/ //tegenhanger van addClass
/*        $(`button`).toggleClass(`color`);*/
    });
});