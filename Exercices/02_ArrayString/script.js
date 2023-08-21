const str = "ma formation javascript";

console.table(str.split(""));

// – Retourner la position de « ma »
console.log("ma : ", str.indexOf("ma"));
console.log("ma : ", str.search(/ma/gi));

// – Indiquer l’indice de la lettre « p »
console.log("p : ", str.indexOf("p"));
console.log("p : ", str.search(/p/gi));

// – Retrouver la lettre située à l’indice 21
console.log("21 : ", str.charAt(21));
console.log("21 : ", str.at(21));
console.log("21 : ", str.slice(21, 22));

// – Remplacer « javascript » par « Java »
console.log("javascript => java : ", str.replace("javascript", "Java"));

// – Découper la chaîne avec le délimiteur «  » (espace)
console.log("split : ", str.split(" "));

// – Inverser la chaîne de caractères (+ difficile) :

// Transformer la chaine de caractères en tableau (pour la renverser)
const strToTab = str.split("");
console.log(strToTab);

// Renverser le tableau
const reversedTab = strToTab.reverse();
console.log(reversedTab);

// Transformer le tableau en chaine de caractères
const tabToStr = reversedTab.join("");
console.log(tabToStr);

console.log(str.split("").reverse().join(""));
