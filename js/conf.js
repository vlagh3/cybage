class Config {
    get structure() {
      return JSON.parse(localStorage.getItem("structure"));
    }
    set structure(structure) {
      localStorage.structure = JSON.stringify(structure);
    }


    get name() {
      return JSON.parse(localStorage.getItem("name"));
    }
    set name(name) {
      localStorage.name = JSON.stringify(name);
    }


    get hostname() {
      return JSON.parse(localStorage.getItem("hostname"));
    }
    set hostname(hostname) {
      localStorage.hostname = JSON.stringify(hostname);
    }


    get search_engines() {
      return JSON.parse(localStorage.getItem("search_engines"));
    }
    set search_engines(sEng) {
      localStorage.search_engines = JSON.stringify(sEng);
    }


    constructor() {
        this.name       = this.name       || "vlaghe";
        this.hostname   = this.hostname   || "cbox";
        this.search_engines = this.search_engines || {
            ":yt": "https://www.youtube.com/results?search_query=",
            ":g": "https://www.google.com/search?q="
        };
        this.structure  = this.structure  || {
                "resources": [
                    ["bitly", "https://bitly.com/"],
                    ["github", "https://github.com/"],
                    ["pexels", "https://www.pexels.com/"],
                    ["protonmail", "https://mail.protonmail.com/inbox"]
                ],
                "social": [
                    ["4chan", "https://4chan.org"],
                    ["reddit", "https://reddit.com"],
                    ["youtube", "https://youtube.com"]
                ]
        };
    }
}

// Initial config setup
let cfg = new Config()
