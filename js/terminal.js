/* -- AUTISTIC VARS -- */
var banner = `
     _..__.          .__.._
   .^"-.._ '-(\\__/)-' _..-"^.
          '-.' oo '.-'
             \`-..-\'     -- ${colorizer("Welcome " + cfg.name, "b", "#ce4b6d")}
`

// What the fuck am i doing
var help = {
    "-- KeyBinds --": `
<Shift+Space>   enter/exit search mode
<Shift+P>       focus on terminal`,
    "-- Configuration --": `
import  Import config from file,
export  Export your current config layout`,
    "-- Search Options --": `
Search Engines:
    :yt     https://www.youtube.com/results?search_query={string}
    :g      https://www.google.com/search?q={string}
    :arch   https://aur.archlinux.org/packages/?O=0&K={string}
    :gh     https://github.com/search?q={string}`
}
var prompt = `[[b;#ce4b6d;]${cfg.name}[[;#116666;]@]${cfg.hostname} [[b;#2a5b6f;]~ $]] `



/* -- FUNCTIONS -- */
/*
 * type:
 *      g = glow & b = bold
 *      i = italic & u = underline
 *
 * terminal syntax
 *  [[type;text color;background] k...]
 */
function colorizer(msg, type="b", col="#116666", bgCol="") {
    return `[[${type};${col};${bgCol}] ${msg}]`
}


/* -- TERMINAL -- */
/*
 *  links:  term.echo('[[!;;;;https://github.com/jcubic/jquery.terminal]visit repo]');
 *  imgs:   term.echo('[[@;;;;https://placekitten.com/300/300]]');
 */

var term = $('.terminal').terminal({

    // Display help message
    help: function() {
        for(var key in help) {
            this.echo(colorizer(key))
            this.echo(colorizer(help[key], "i", col="#ce4b6d"))
            this.echo("\n")
        }
    },
    // Handle import of config file
    import: function() {
        // I'm a monkey
        var term = this;

        // Create the file input
        var fileSelector = $('<input id="config_input" type="file" accept="application/json">');
        fileSelector.click();
        // On submit, set the new config
        fileSelector.change(async function(e) {
            const file = this.files[0];
            if (file.type != "application/json") {
                term.echo(colorizer("! Only JSON files, you trickster", "bi", "#1afe49"));
                return
            }

            const new_conf = JSON.parse(await file.text());
            cfg.structure = new_conf['structure'];
            cfg.name = new_conf['name'];
            cfg.hostname = new_conf['hostname'];
            cfg.search_engines = new_conf['search_engines'];

            // This code is so wrong
            location.reload();
        })
    },

    // It hurts, but I will definitely refactor this later
    // TODO: --dow option which will download to local machine
    export: function() {
        const config = {
            "name": cfg.name,
            "hostname": cfg.hostname,
            "structure": cfg.structure,
            "seach_engines": cfg.seach_engines
        }
        this.echo(colorizer("-- Here's your config --", "b", "#116666"));
        this.echo(JSON.stringify(config));
    }

},{
    greetings: () => {
        return banner
    },
    prompt: prompt,
    keymap: {
        'SHIFT+Q': function(e, original) {
            console.log('unfocus me plsss');
            $("#focus_me").focus();

        }
   }
});


// Focus terminal on <Shift+P> keybind
$(window).keypress(function (e) {
    var key = e.which || e.keyCode; 
    if (key == 80 && e.shiftKey) {
        term.focus();
    }
});
