/* jshint esversion: 6 */
const carrousel = (function carrousel() {
  "use strict";
  var arr = [
    "images/montage_newsletter.jpg",
    "images/windows.jpg",
    "images/9.jpg",
    "images/jaune4k.jpg",
    "images/vert4k.jpg",
    "images/bleu4k.jpg",];
    var pos=0;

    function init() {
      var Carrousel = function Carrousel(params) {
        console.log(params);
      }
      var carrousel = new Carrousel({
        parentHTML: document.getElementById("carrousel"),
        id: document.getElementById("carrousel"),
        images: arr,
      });
      const carrou = document.getElementById("carrousel");
      if(carrou)
      carrou.style.background="url('"+arr[0]+"') no-repeat";
      const gauche = document.getElementById("leftarrow");
      const droite = document.getElementById("rightarrow");
      if(gauche)
      gauche.onclick = function prev(){
        console.log("click gauche");
        pos--;
        if (pos<0) {
          pos=arr.length-1;
        }
        console.log(pos);
        carrou.style.background="url('"+arr[pos]+"') no-repeat";
      };
      if(droite)
      droite.onclick = function next(){
        console.log("clic droit");
        pos++
        if (pos>=arr.length) {
          pos=0;
        }
        console.log(pos);
        carrou.style.background="url('"+arr[pos]+"') no-repeat";
      };

    window.addEventListener("DOMContentLoaded", init);


    }

    return {
      init
    };

  }());
