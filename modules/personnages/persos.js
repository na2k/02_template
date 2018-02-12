/* jshint esversion: 6 */

var persos = (function persos() {
  "use strict";

  var persosList;
  var filterPersos = document.getElementById("filter_persos");
  // filterPersos.addEventListener("keypress", function filtre(ev){
  //   console.log("a");
  // });
  function createList(elements) {
    resetList();
    const ul = document.createElement("ul");
    ul.className = "list persos";

    persosList.forEach(function(p) {
      const li = document.createElement("li");
      li.className = "perso";
      li.innerHTML += `
      <span class="name"> ${ p.name } </span>
      <span class="genre"> ${ p.genre } </span>
      `;
      ul.appendChild(li);
    });

    elements.app.querySelector("#personnages").appendChild(ul);
  }

  function resetList() {
    const persos = document.querySelector("#personnages .persos");
    if (persos) {
      persos.remove();
    }
  }

  function filtrePers() {
    const filterInput = document.getElementById("filter_persos");
    if (filterInput)
    addEventListener("keyup", function filtrer(){
      var regex = new RegExp(this.value, "gi");
      resetList();


      var res = persosList.filter(function(elem){
        return elem.name.match(regex) || elem.genre.match(regex);


      });
      const ul = document.createElement("ul");
      ul.className = "list persos";
      res.forEach(function(p){

        const li = document.createElement("li");
        li.className = "perso";
        li.innerHTML += `
        <span class="name"> ${ p.name } </span>
        <span class="genre"> ${ p.genre } </span>
        `;

        ul.appendChild(li);
      });

      document.querySelector("#personnages").appendChild(ul);

    });
  
}
  function init(elements) {
    if (elements.getDataPHP)
    elements.getDataPHP.onclick = function handleClick() {
      ajax.getData("data.php?ajax=persos", function (data) {
        persosList = data;
        createList(elements);
      });
    };
    filtrePers();
  }




  return {
    createList: createList,
    init: init
  };

}());
