
/*
 *  TODO
 *  
 *  [] Handle different search engines (e.g :yt, :g, :arch, :gh)
 *  [] Let the user dynamically add search engines through the terminal
 *
 */


$(document).ready(function () {

    // Retrieve search input ref
    var search_input = document.getElementById("search_input")

    // Enter/Exit search mode if <Shift-Space> is pressed
    var lastShift = false;
    $(window).keypress(function (e) {

        var key = e.which || e.keyCode; 
        if (key == 32 && e.shiftKey) {
            // Make form visible and focus on it
            if (!lastShift) {
                search_input.parentElement.classList.add("visible");
                $(".search").fadeIn("fast", 
                    function() {
                        $("#search_input").focus();
                    }
                );
                lastShift = true
            }

            // Make it invisible
            else {
                search_input.parentElement.classList.remove("visible");
                lastShift = false
            }
        }
    })

    // After form is submitted, clear out the input
    $('#search').submit(function(e) {
        e.preventDefault();         // don't submit multiple times
        this.submit();              // use the native submit method of the form element
        search_input.value = ""     // blank the input
    });

});
