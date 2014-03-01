
/* TO DO
 * 1) Load handlebars template from an external file to make html markup clean
 * 2) Create template for carousel (slider) to make it's content dynamic
 * and for example change this content according "search" results
 * */

 jQuery(function ($) {

    function showItems(template, dataUrl, parentContainer, headingContainer ) {

        //Compile the HTML from the template
        var compiledTemplate = Handlebars.compile (template.html());

        //load data json and create new list
        $.getJSON(dataUrl, function(data) {

            //set current heading
            headingContainer.text(data.heading);

            // vanish previous content, i.e set content '', empty string
            // and append compiled template
            parentContainer.html('').append(compiledTemplate(data.items));

        }).fail(function (jqXHR, textStatus) {
                //error message
                var message = "Error occurred: ";
                message += 'Status code: ' + jqXHR.status;
                if (textStatus === 'parsererror') {
                    //bad  formatted json
                    message += " Requested JSON parse was failed.";
                } else if (textStatus === 'abort') {
                    //network problem
                    message += " Ajax request was aborted.";
                }
                // alert div styled by Bootstrap's CSS classes
                var errorAlert =
                '<div class="alert alert-warning alert-dismissable col-xs-12">' +
                 message +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                '</div>';

                // add DIV with error mesage after "app-heading" HTML element
                $('#app-heading').after(errorAlert);
        });
    }

    var appHeadingContainer = $('#app-heading');
    var listContainer = $("ul#items-list");

    // show featured products list on-load
    showItems($("#featured-products-template"),"assets/data/featured-products.json", listContainer, appHeadingContainer);

    // action on Submit button click event
    $('#get-data-btn').on("click", function() {
        //hide the featured product carousel with a sliding motion
       $('#featured-product-carousel').slideUp('slow', function(){
           showItems($("#search-results-template"),"assets/data/search-results.json", listContainer, appHeadingContainer);
       });
       //prevent button from submitting forms
       return false;
    });

});
