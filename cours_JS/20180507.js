/*
Nouvel exercice pour manipuler les fonctions map/fiter/sort
    Créer un tableau ["Eere", "45" , "ere", "13", "ZZZ", "2342"];
    Filter dans le tableau uniquement les chaîne de caractère ne comportant que des nombres (/^\d+$/.test(val) renvoie true si val contient uniquement des nombres)
    Transformer le tableau en un tableau d"entier (parseInt())
    Trier le tableau par ordre croissant des entiers
*/

/*
Extraction et tri des entiers d'un tableau
*/
function extractSort(entry) {
  "use strict";
  var resultFilter = [];
  var resultMap = [];
  var resultSort = [];

  resultFilter = entry.filter(function(elt) {
    var regExp = /^\d+$/;
    return regExp.test(elt);
  });

  resultMap = resultFilter.map(function(elt) {
    return parseInt(elt, 10);
  });

  resultSort = resultMap.sort(function(a, b) {
    return a - b;
  });
  return resultSort;
}

/*
Extraction et tri des entiers d'un tableau uniquement avec des Lambda
*/
function extractSortLambda(entry) {
  "use strict";
  var resultSort = [];

  return resultSort = entry
    .filter((elt) => /^\d+$/.test(elt))
    .map((elt) => parseInt(elt, 10))
    .sort((a, b) => a - b);
}

/*
Affichage des résultats des calculs
*/
"use strict";

function DisplayResult(eltById, tabEntry = ["toto", "45", "toti", "13", "2342"]) {
  var tabSorted = [];
  var list = document.getElementById(eltById);
  var result = "";

  switch (eltById) {
    case "resultExtractSort":
      tabSorted = extractSort(tabEntry);
      break;
    case "resultExtractSortLambda":
      tabSorted = extractSortLambda(tabEntry);
      break;
    default:
      tabSorted = ["vide"];
  }
  console.log(eltById + " -> " + Array.from(tabSorted));
  // on constitue l'affichage du résultat sous forme de liste
  result = result + `<p>Il a été trié ${tabSorted.length} nombres entiers à partir du tableau suivant [${Array.from(tabEntry)}] :</p><ol>`;
  result = result + "<li class='prime_number'>";
  result = result + tabSorted.join("</li><li class='prime_number'>");
  result = result + "</li></ol>";
  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}