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
                $(".search").fadeIn("fast", function() {

                    // I spent to much time trying to figure out
                    // why this doesn't work, fuck it

                    // Remove focus from any focused element
                    if (document.activeElement) {
                        document.activeElement.blur();
                    }
                    $("#search_input").focus();

                });
                lastShift = true
            }

            // Make it invisible
            else {
                search_input.parentElement.classList.remove("visible");
                lastShift = false
            }
        }
    })


    // After form is submitted, handle
    // search and clear out the input
    $('#search').submit(function(e) {
        e.preventDefault();         // don't submit multiple times

        // Detect if user wants a search engine 
        // (i know this is frustrating to watch)
        let uInput = search_input.value.trim()
        if (uInput[0] == ":") {
            let engine = uInput.split(" ")[0]
            let query  = uInput.substr(uInput.indexOf(' ')+1); 

            if (engine in cfg.search_engines) {
                window.open(cfg.search_engines[engine] + query)
            }
            else {
                alert(`${engine} search engine doesn't exist`)
            }

        }
        // If no search engine used, just duck that
        else {
            window.open("https://duckduckgo.com/?q=" + uInput)
        }

        search_input.value = ""     // blank the input
        //this.submit();              // use the native submit method of the form element
    });

});

