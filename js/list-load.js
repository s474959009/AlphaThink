var js_url = './js/';
$LAB
    .script(js_url + "jquery-1.7.1.min.js").wait()
    .script(js_url + "global.js")
    .script(js_url + "scrollpagination.js")
    .wait(function () {
        $(function () {
            $('#page-list').scrollPagination({
                'contentPage': './democontent.html', // the url you are fetching the results
                'contentData': { id: $('#page-list').children().size() }, // these are the variables you can pass to the request, for example: children().size() to know which page you are
                'scrollTarget': $(window), // who gonna scroll? in this example, the full window
                'heightOffset': 10, // it gonna request when scroll is 10 pixels before the page ends
                'beforeLoad': function () { // before load function, you can display a preloader div
                    $('#loading').fadeIn();
                },
                'afterLoad': function (elementsLoaded) { // after loading content, you can use this function to animate your new elements
                    $('#loading').fadeOut();
                    var i = 0;
                    $(elementsLoaded).fadeInWithDelay();
                    if ($('#page-list').children().size() > 100) { // if more than 100 results already loaded, then stop pagination (only for testing)
                        $('#nomoreresults').fadeIn();
                        $('#page-list').stopScrollPagination();
                    }
                }
            });
            // code for fade in element by element
            $.fn.fadeInWithDelay = function () {
                var delay = 0;
                return this.each(function () {
                    $(this).delay(delay).animate({ opacity: 1 }, 200);
                    delay += 100;
                });
            };
        });
    })