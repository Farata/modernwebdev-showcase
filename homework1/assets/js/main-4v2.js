jQuery(function ($) {
    $.ajax({
        url: 'assets/data/search-results.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
            $.each(data['items'], function (index) {
                var item = '<li class="col-md-6">' +
                    '<div class="row">' +
                    '<div class="col-xs-4">' +
                    '<a href="javascript:void(0)"><img src="' +
                    data['items'][index].thumb + '" alt="" class="img-responsive"></a>' +
                    '</div>' +
                    '<div class="col-xs-8">' +
                    '<h2><a href="javascript:void(0)">' +
                    data['items'][index].title + '</a></h2>' +
                    '<p>' +
                    data['items'][index].description +
                    '</p>' +
                    '</div>' +
                    '</div><br/>' +
                    '<div class="row">' +
                    '<div class="col-xs-4 text-center">' +
                    '<span class="badge">' +
                    data['items'][index].timeleft + ' hour left</span><br/>' +
                    '<small>Today 15.00</small>' +
                    '</div>' +
                    '<div class="col-xs-4 text-center">' +
                    '<span class="badge">' +
                    '<span class="glyphicon glyphicon-eye-open"></span> ' +
                    data['items'][index].watchers +
                    '</span><br/>' +
                    '<small>Watchers</small>' +
                    '</div>' +
                    '<div class="col-xs-4 text-center">' +
                    '<span class="badge">' +
                    '<span class="glyphicon glyphicon-usd"></span> ' +
                    data['items'][index].price + '.00 ' +
                    '</span><br/>' +
                    '<small>Current price</small>' +
                    '</div></div> <hr/></li>';

                $("ul#search-results").append(item);
            });
        }).fail(function (jqXHR, textStatus) {
            console.log('Error status code:' + jqXHR.status);
            if (textStatus === 'parsererror') {
                console.log('Requested JSON parse failed.');
            } else if (textStatus === 'abort') {
                console.log('Ajax request was aborted.');
            }
        });
});