$(`.vraag`).click(function (event) {
$(this).children().toggleClass('collapse');
$(this).next().fadeToggle("slow");

});