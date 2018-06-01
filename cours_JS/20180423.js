/*
Calcul les nombres premiers
CodeAcadémie : Exercice du cours du 23/04/2018
A partir d'un tableau d'entiers, écrire des codes exploitant les différents mécanismes d'itération 
(while, for, for of, Array.forEach (cf. également Array.filter et Array.map)) pour dans un premier temps afficher 
les nombres premiers (console.log), puis dans un second temps produire un tableau dérivé ne contenant que ces nombres premiers.
Bonus : Le tableau des entiers peut-lui même être généré dynamiquement via une boucle.
Indice 1 :  Un nombre premier est un nombre divisible uniquement par 1 ou par lui-même.
            Ainsi, un nombre n est premier s'il n'est divisible par aucun des nombres premiers qui le précèdent.
Indice 2 :  Un nombre a est divisible par un nombre b si le reste de la division entière de a par b est égal à 0.
            Le reste d'une division entière s'obtient par l'opérateur % (modulo).
*/

/*
Affichage des résultats des calculs
*/
"use strict";
function DisplayResult(eltById, maxNum = 0) {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  var tabPrimeNumber = [];
  var list = document.getElementById(eltById);
  var result = "";

  switch (eltById) {
    case "resultWhile":
      tabPrimeNumber = primeNumberWhile(tab);
      break;
    case "resultFor":
      tabPrimeNumber = primeNumberFor(tab);
      break;
    case "resultForOf":
      tabPrimeNumber = primeNumberForOf(tab);
      break;
    case "resultArrayforEach":
      tabPrimeNumber = primeNumberArrayforEach(tab);
      break;
    case "resultArrayfilter":
      tabPrimeNumber = primeNumberArrayfilter(tab);
      break;
    case "resultArraymap":
      tabPrimeNumber = primeNumberArraymap(tab);
      break;
    case "resultBonus":
      tabPrimeNumber = primeNumberFirstOne(maxNum);
      break;
    default:
      tabPrimeNumber = ["vide"];
  }

  console.log(eltById + " -> "+ Array.from(tabPrimeNumber));
  result = result + `<p>Il a été trouvé ${tabPrimeNumber.length} nombres premiers :</p>`;
  for (let element of tabPrimeNumber) {
    result = result + `<li class="prime_number">${element}</li>`;
  }
  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle while
*/
function primeNumberWhile(tab) {
  "use strict";
  var tabPrimeNumber = [];
  var i = 0;
  var isPrimeNumber;
  var j = 0;

  //boucle sur tous les items du tableau pour déterminer si ils sont premiers
  while (i < tab.length) {
    //par défaut, le nombre est premier
    isPrimeNumber = true;
    j = 1;
    //boucle sur le tableau des nombres premiers déjà connus et si le nb est tjs premier
    while (j < tabPrimeNumber.length && isPrimeNumber) {
      //si le reste de la division entre le nb testé et un nb premier est  alors le nb n'est pas premier
      if (tab[i] % tabPrimeNumber[j] === 0) {
        isPrimeNumber = false;
      }
      j++;
    }
    //si le nb est premier, on l'ajoute au tableau des nb premiers
    if (isPrimeNumber) {
      tabPrimeNumber.push(tab[i]);
    }
    i++;
  }
  return tabPrimeNumber;
}

/*
Affichage des nombres premiers avec la boucle for
*/
function primeNumberFor(tab) {
  "use strict";
  var tabPrimeNumber = [];
  var i = 0;
  var isPrimeNumber;
  var j = 0;

  for (i = 0; i < tab.length; i++) {
    isPrimeNumber = true;
    for (j = 1; j < tabPrimeNumber.length && isPrimeNumber; j++) {
      if (tab[i] % tabPrimeNumber[j] === 0) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      tabPrimeNumber.push(tab[i]);
    }
  }
  return tabPrimeNumber;
}

/*
Affichage des nombres premiers avec la boucle for .. of
*/
function primeNumberForOf(tab) {
  "use strict";
  var tabPrimeNumber = [];
  var isPrimeNumber;

  for (let element of tab) {
    isPrimeNumber = true;
    for (let primeNumber of tabPrimeNumber) {
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      tabPrimeNumber.push(element);
    }
  }
  return tabPrimeNumber;
}

/*
Affichage des nombres premiers avec la boucle Array.forEach
*/
function primeNumberArrayforEach(tab) {
  "use strict";
  var tabPrimeNumber = [];
  var isPrimeNumber;

  tab.forEach(function(element) {
    isPrimeNumber = true;
    tabPrimeNumber.forEach(function(primeNumber) {
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
      }
    });
    if (isPrimeNumber) {
      tabPrimeNumber.push(element);
    }
  })
  return tabPrimeNumber;
}

/*
Affichage des nombres premiers avec la boucle Array.filter
*/
function primeNumberArrayfilter(tab) {
  "use strict";
  var tabPrimeNumber = [];

  tabPrimeNumber = tab.filter(function(elt, index, tabE) {
    var i;
    var isPrimeNumber = true;

    for (i = 1; i < index && isPrimeNumber; i++) {
      if (elt % tabE[i] === 0) {
        isPrimeNumber = false;
      }
    }
    return isPrimeNumber;
  })
  return tabPrimeNumber;
}

/*
Affichage des nombres premiers avec la boucle Array.map
*/
function primeNumberArraymap(tab) {
  "use strict";
  var tabPrimeNumber = [];
  var j;

  tabPrimeNumber = tab.map(function(elt, index, tab) {
    var i;
    var isPrimeNumber = true;

    for (i = 1; i < index && isPrimeNumber; i++) {
      if (elt % tab[i] === 0) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      return elt;
    }
  })
  .filter(function(elt) {
    return (elt !== undefined);
  });
  return tabPrimeNumber;
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

/*
Affichage des x premiers nombres premiers inférieurs à une borne
*/
function primeNumberFirstOne(borne) {
"use strict";
  var i = 0;
  var j = 0;
  var tabPrimeNumber = [];

  for (i = 1; i <= borne; i++) {
    j = 1;
    var racine = Math.floor(Math.sqrt(i));

    do {
      j++;
    } while (j <= racine && i % j !== 0);

    // nombre premier trouvé
    if (j > racine) {
      tabPrimeNumber.push(i);
    }
  }
  return tabPrimeNumber;
}