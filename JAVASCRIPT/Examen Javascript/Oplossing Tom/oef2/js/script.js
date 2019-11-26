$(document).ready(function() {
    var resultDiv = $('#result');
    var result = 325;
   for(let i = 1; i < result; i++) {
         $.ajax({
            url: "http://www.dnd5eapi.co/api/monsters",
            dataType: "json",
            success: function (response) {
                 resultDiv.append('<h1>Dragon and Dungeons</h1>');

                $.each(response.results, function (i, result) {
                    var naam = result.name;
                    var url = result.url;                  

                    /*teksten*/
                    resultDiv.append('<h2>' + naam + '</h2>');
                    resultDiv.append('<li>'+url+'</li>');
                    resultDiv.append('----');

                });
            },
            error: function (error) {

            }
        });


    }
});
