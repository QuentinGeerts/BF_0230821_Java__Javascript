// Utilisez l’objet Date et des structures conditionnelles,
// écrivez un programme qui affiche le jour de la semaine.
// Exemple : « Bonjour, nous sommes lundi! »


/*
    Première façon
*/

let now = new Date();
let jour = "";

switch (now.getDay()) {
    case 1:
        jour = "lundi";
        break;
    case 2:
        jour = "mardi";
        break;
    case 3:
        jour = "mercredi";
        break;
    case 4:
        jour = "jeudi";
        break;
    case 5:
        jour = "vendredi";
        break;
    case 6:
        jour = "samedi";
        break;
    default:
        jour = "dimanche";
}

console.log("Bonjour, nous sommes " + jour);

/*
    Deuxième façon
*/

const jourSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

console.log("Bonjour, nous sommes " + jourSemaine[now.getDay()])

/*
    Troisième façon
*/

console.log("Bonjour, nous sommes " + now.toLocaleDateString('fr-FR', { weekday: 'long' }));