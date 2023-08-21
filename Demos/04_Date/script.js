// Création d'un date

// heure locale 
let now = new Date();
console.log("now : ", now);

// Sur base d'un timestamp
// nombre de millisecondes depuis le 01/01/1970 00:00:00
let d1 = new Date(1692625425188);
console.log("d1 : ", d1);

// Sur base d'une chaine de caractères
// let d2 = new Date("21/08/2023") // Format européen KO
// let d2 = new Date("08/21/2023") // Format américain OK
let d2 = new Date("2023/08/21"); // Format américain OK
console.log("d2 : ", d2);

// Sur base des parties d'une date
let d3 = new Date(2023, 7);
console.log("d3 : ", d3);

d3 = new Date(2023, 7, 21);
console.log("d3 : ", d3);

d3 = new Date(2023, 7, 21, 15);
console.log("d3 : ", d3);

d3 = new Date(2023, 7, 21, 15, 50);
console.log("d3 : ", d3);

d3 = new Date(2023, 7, 21, 15, 50, 30);
console.log("d3 : ", d3);

d3 = new Date(2023, 7, 21, 15, 50, 30, 123);
console.log("d3 : ", d3);

// Extraction des données d'une date

console.log("Année : ", now.getFullYear());
console.log("Mois : ", now.getMonth());
console.log("Jour : ", now.getDate());
console.log("Heure : ", now.getHours());
console.log("Minute : ", now.getMinutes());
console.log("Seconde : ", now.getSeconds());
console.log("Milliseconde : ", now.getMilliseconds());

console.log("Jour de la semaine : ", now.getDay());


// Modification des données d'une date

console.log("Année : ", now.setFullYear(2021));
console.log("Mois : ", now.setMonth(0));
console.log("Jour : ", now.setDate(25));
console.log("Heure : ", now.setHours(9));
console.log("Minute : ", now.setMinutes(13));
console.log("Seconde : ", now.setSeconds(58));
console.log("Milliseconde : ", now.setMilliseconds(999));

console.log(now);

// Formatage d'une date

console.log(now.toLocaleDateString());


const options = { day: 'numeric', month: 'long', year: 'numeric' }
console.log(now.toLocaleDateString(navigator.language, options));