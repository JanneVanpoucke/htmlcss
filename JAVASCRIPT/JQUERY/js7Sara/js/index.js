//Dit kijkt in het geheugen of er al items in de lijst staan:
$(document).ready(function () {
    $("#list-items").html(localStorage.getItem("listItems"));
});
$("button").click(function (event) {
    event.preventDefault(); //voorkomen dat de knop zijn default actie uitvoert
    var nieuw = $("#todo-list-item").val(); //de variabele nieuw = de inhoud van het tekstvak
    $("#list-items").append("<li> <input type='checkbox'>" + nieuw + "<button class='remove'>X</button><hr></li> "); //aan de lijst toevoegen van variabele nieuw met een checkbox en een knop om te verwijderen
    $("#todo-list-item").val(""); //textbox leegmaken
    window.localStorage.setItem("listItems", $("#list-items").html()); //opslaan in geheugen
});
$(document).on("click",".remove", function () {
    $(this).parent().remove(); //verwijderen van een item
    window.localStorage.setItem("listItems", $("#list-items").html()); //opslaan in geheugen
});
$(document).on("change",":checkbox", function () {
    $(this).parent().toggleClass("completed"); //als je de checkbox aanvinkt komt de class completed bij het item: dit zorgt ervoor dat het doorstreept wordt
    if($(this).attr("checked")){
        $(this).removeAttr("checked"); //het is niet omdat de checkbox aangevinkt is dat de attribute "checked" ook aan de checkbox hangt. Dit kijkt of de "checked" attribute er is, en anders voegt hij het toe
    }
    else{
        $(this).attr("checked", "checked");
    }
    window.localStorage.setItem("listItems", $("#list-items").html()); //opslaan in geheugen
});