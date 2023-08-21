// Déclaration
const myArray = []; // A la volée
const myArray2 = new Array(); // Via constructeur

const myArray3 = [[], []];
const myArray4 = new Array(new Array(), new Array());


myArray[0] = 5;

console.log(myArray); // [ 5 ]

console.log("myArray[100]", myArray[100]); // undefined

myArray[4] = 42;
console.log(myArray); // [ 5, 100 ]

for (let i = 0; i < myArray.length; i++) {
    console.log("Element ", i, " : ", myArray[i]);
}

myArray['digital'] = "City";
console.log(myArray.digital);
console.log(myArray.length);
console.log(Object.keys(myArray).length);
console.log(Object.keys(myArray)[2]);
console.clear();
//
// Fonctions (Array)
// 

const tab = [];

// Ajouter un élément à la fin du tableau
tab.push("Quentin", "Mélanie", "Aude", "Samuel");

console.table(tab);

/// Ajouter un élément au début
tab.unshift("Michael", "Thierry");

console.table(tab);

// Supprimer un élément à la fin du tableau
let elementDeleted = tab.pop();
console.table(tab);
console.log(elementDeleted);

// Supprimer un élément au début du tableau
let firstElementDeleted = tab.shift();

console.table(tab);
console.log(firstElementDeleted);

// Manipuler les éléments d'un tableau (insérer, supprimer, ...)
// let elementsDeleted = tab.splice(1, 0);
let elementsDeleted = tab.splice(1, 0, "Cédric", "Alexandre");

console.table(tab);
console.log(elementsDeleted);

// Filtrer un tableau

const formateurs = [
    { nom: 'Geerts', prenom: 'Quentin', sexe: 'H' },
    { nom: 'Geerts', prenom: 'Mélanie', sexe: 'F' },
    { nom: 'Legrain', prenom: 'Samuel', sexe: 'H' },
    { nom: 'Beurive', prenom: 'Aude', sexe: 'F' },
];

const formateursF = formateurs.filter((f, i, t) => f.sexe === 'F');
const formateursH = formateurs.filter((f, i, t) => f.sexe === 'H');
console.table(formateursF);
console.table(formateursH);

// Manipuler les éléments d'un tableau

const formateursTransformes = formateurs.map((formateur, index) => {
    if (index % 2 == 0) {
        formateur.nom += "HELLO"
    }
});

console.table(formateurs);

// Trier un tableau
const tab2 = ["Quentin", 32, true, 23, 1, 13, 100, "Alexandre", "javascript"];

console.warn("Avant");
console.table(tab2);
tab2.sort();
console.warn("Après");
console.table(tab2);

tab2.sort((a, b) => a - b); // ordre croissant
console.table(tab2);
tab2.sort((a, b) => b - a); // ordre décroissant
console.table(tab2);

console.log(tab2.join(" - "));


