function extractSort() {
  var entry = ["toto", "45", "toti", "13", "2342"];
  var resultFilter = [];
  var resultMap = [];
  var resultSort = [];
  var list = document.getElementById("resultExtractSort");
  var outPut = `${entry} devient un tableau de nombre triés :`;

  resultFilter = entry.filter(function(elt) {
    var regExp = /^\d+$/;

    console.log(regExp.test(elt));
    return regExp.test(elt);
    //retur booleen
  })

  resultMap = resultFilter.map(function(elt) {
    console.log(parseInt(elt));
    return parseInt(elt)
  })

  resultSort = resultMap.sort(function(a, b) {
    console.log(a + ":" + b);
    return a - b;
  })

  for (let eltFiltered of resultSort) {
    console.log(eltFiltered + " est de type " + typeof(eltFiltered));
    outPut = outPut + `<li class="prime_number">${eltFiltered}</li>`;
  }
  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = outPut;
}

function extractSortLambda() {
  var entry = ["toto", "45", "toti", "13", "2342"];
  var resultFilter = [];
  var resultMap = [];
  var resultSort = [];
  var list = document.getElementById("resultExtractSortLambda");
  var outPut = "Tableau d'Integer triés :";

  resultSort = entry.filter(elt => /^\d+$/.test(elt))
                    .map(elt => parseInt(elt))
                    .sort((a, b) =>  a - b);

  for (let eltFiltered of resultSort) {
    console.log(eltFiltered + " est de type " + typeof(eltFiltered));
    outPut = outPut + `<li class="prime_number">${eltFiltered}</li>`;
  }
  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = outPut;
}