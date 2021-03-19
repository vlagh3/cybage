// OH NO, Nothing is secure in here
//
function genTree(linksObj) {
    const list = document.getElementById("list")

    full_tree = ""
    Object.keys(linksObj).forEach((categ_name) => {
        full_tree += `
            <li>
                <h4 onclick="this.parentNode.classList.toggle('hideChildren')">${categ_name}</h4>
                <ul>
                ${linksObj[categ_name].map(([lName, url]) => `
                    <li>
                        <a href="${url}">${lName}</a>
                    </li>`
                ).join("") }

                </ul>
            </li>`

    });

    list.innerHTML = full_tree;
    
}


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

  constructor() {
    this.name       = this.name       || "vlaghe";
    this.hostname   = this.hostname   || "cbox";
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
$(document).ready(function () {

  // It couldn't get more retarded than this
  let names = document.getElementsByClassName("name")
  names[0].innerHTML = cfg.name
  names[1].innerHTML = cfg.hostname
  genTree(cfg.structure)

  // Import cmd handling from terminal
  /*
  $("#import_btn").on("click", (e) => {

      let new_struct = {
          "fun": [
              ["4chan", "https://4chan.org"],
              ["reddit", "https://reddit.com"],
              ["youtube", "https://youtube.com"]
          ]
      }
      cfg.structure = new_struct;
      genTree(cfg.structure)

      e.preventDefault();
  });
  */
    
});
