// OH NO, Nothing is secure in here
function genTree(linksObj=cfg.structure) {
    const list = document.getElementById("list")

    full_tree = ""
    Object.keys(linksObj).forEach((categ_name) => {
        full_tree += `
            <li>
                <h4 onclick="this.parentNode.classList.toggle('hideChildren')">${categ_name}</h4>
                <ul>
                ${linksObj[categ_name].map(([lName, url]) => `
                    <li>
                        <a href="${url}" target="_blank">${lName}</a>
                    </li>`
                ).join("") }

                </ul>
            </li>`

    });
    list.innerHTML = full_tree;
    
}


$(document).ready(function () {

  // It couldn't get more retarded than this
  let names = document.getElementsByClassName("name")
  names[0].innerHTML = cfg.name
  names[1].innerHTML = cfg.hostname
  genTree()

});
