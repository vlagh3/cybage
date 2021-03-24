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
            ":g": "https://www.google.com/search?q=",
            ":gh": "https://github.com/search?q=",
            ":arch": "https://aur.archlinux.org/packages/?O=0&K="
        };
        this.structure  = this.structure  || {
            "social": [
              ["reddit", "https://reddit.com/login"],
              ["gitlab", "https://gitlab.com/login"],
              ["medium", "https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F&source=--------------------------lo_home_nav-----------"],
              ["twitter", "https://twitter.com/login"],
              ["stackoverflow", "https://stackoverflow.com/"]
            ],
            "finance": [
              ["binance", "https://accounts.binance.com/en/login"],
              ["tradingview", "https://www.tradingview.com/"],
              ["coinmarketcap","https://coinmarketcap.com/"],
              ["uniswap", "https://uniswap.org/"]
            ],
            "security": [
              ["hackerone", "https://hackerone.com/users/sign_in"],
              ["intigrity", "https://login.intigriti.com/Account/Login"],
              ["hackthebox", "https://hackthebox.eu/"],
              ["pulsedive", "https://pulsedive.com/"]
            ],
            "content": [
              ["raindrop", "https://app.raindrop.io/account/login"],
              ["hackernoon", "https://hackernoon.com/"]
            ],
            "personal": [
              ["vultr", "https://my.vultr.com/"],
              ["amazon", "https://www.amazon.com/"],
              ["epik", "https://www.epik.com/"]
            ]
        };
    }
}

// Initial config setup
let cfg = new Config()
