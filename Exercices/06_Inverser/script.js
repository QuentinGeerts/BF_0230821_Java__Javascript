// Créez une fonction inverser(chaine) qui effectuera une inversion des caractères d’une
// chaîne et affichera le résultat en console et en alerte.
// Pour rappel : Inverser les caractères se fait en 3 étapes !

function inverser (chaine) {

    if (typeof chaine == "string") {
        chaine = chaine.split("").reverse().join("");
    }

    return chaine;

}

function inverser2 (chaine) {
    
    switch (typeof chaine) {
        case "string":
            chaine = chaine.split("").reverse().join("");
            break;
        case "number":
            chaine = -chaine;
            break;
        case "boolean":
            chaine = !chaine;
            break;
    }

    return chaine;

}

console.log(inverser("Coucou les p'tits loups"));
console.log(inverser(12));
console.log(inverser(true));

console.log(inverser2("Coucou les p'tits loups"));
console.log(inverser2(-12));
console.log(inverser2(true));