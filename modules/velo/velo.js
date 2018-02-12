/* jshint esversion: 6 */
const musee = (function musee() {
    "use strict";
    var listMusee, listElem;

    function createList() {
        listMusee.forEach(function(musee) {
            console.log(musee); // chaque objet café
             const li = document.createElement("li");
             li.className = "clickable item musee";
             li.innerHTML = `
                 <h3 class="title">${musee.fields.nom_du_musee}</h3>
                 <p>
                    ${musee.fields.adr},  ${musee.fields.cp}
                </p>
             `;
            li.onclick = function() {
                console.log("click");
            };
             listElem.appendChild(li);
        });
    }

    function init() {
        const btn = document.getElementById("musee");
        listElem = document.getElementById("list_musee");
        if (btn)
        btn.onclick = function handleClick() {
            ajax.getData("https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-musees-de-france-a-paris&rows=1000&facet=cp", function (data) {
                 console.log(data); //le résultat de la requête AJAX
                 listMusee = data.records; // la liste des cafés
                createList();
            });
        };
    }

    return {
        init
    };

}());
