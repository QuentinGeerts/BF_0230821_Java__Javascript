let str1 = "Chaine de caractères";
let str2 = 'Chaine de caractères';
let str3 = `Chaine de caractères`;

const myArray = [12, 12.3, "Hello", () => { }, [], {}];

const personnes = [
    { nom: 'Geerts', 'prenom': 'Quentin' },
    { nom: 'Geerts', 'prenom': 'Mélanie' },
    { nom: 'Legrain', 'prenom': 'Samuel' },
];

// Portée des variables
// <!> var est global

// VAR

console.warn("VAR");

var maVariableVAR = 5;
// var maVariableVAR = "Hello"; // Redéclaration possible

if (true) {
    console.log(maVariableVAR); // 5
    var maVariableVAR = "Hello";
    console.log(maVariableVAR); // "Hello"
}

console.log(maVariableVAR); // "Hello"

// LET - CONST

console.warn("LET");
let maVariableLET = 5;
// let maVariableLET = "Hello"; // Redéclaration impossible

if (true) {
    // console.log(maVariableLET); // 5
    let maVariableLET = "Hello";
    console.log(maVariableLET); // "Hello"

    if (true) {
        console.log("maVariableLET dans 2e if", maVariableLET);
    }
}

console.log(maVariableLET); // 5
