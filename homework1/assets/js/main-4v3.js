jQuery(function ($) {

    // the HTML from the template in the script tag
    var searchResultsTemplate = $("#search-results-template").html();
    //Compile the template
    var theTemplate = Handlebars.compile (searchResultsTemplate);

    $.getJSON("assets/data/search-results.json", function(data) {

        $("ul#search-results").append(theTemplate(data.items));

    }).fail(function (jqXHR, textStatus) {
        $('.alert').removeClass('hidden');
        var message = 'Error status code:' + jqXHR.status;
        console.log(message);
        if (textStatus === 'parsererror') {
            message = "Requested JSON parse failed.";
            console.log(message);
        } else if (textStatus === 'abort') {
            message = "Ajax request was aborted.";
            console.log(message);
        }
        $('.alert').append(message);
    });
});