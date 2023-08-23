// Calcul de la TVA
// Écrire un programme qui :
// 1. Demande à l’utilisateur un prix unitaire hors taxe d’un livre
// 2. Demande à l’utilisateur la quantité de livre
// 3. Calcule et affiche le prix total TTC de la commande, en utilisant une TVA de 21%
// Pour interagir avec l’utilisateur, vous utiliserez les fonctions d’entrée/sortie prompt() et alert().

let prix = prompt("Entrez le prix d'un livre HTC : ");
let quantite = prompt("Entrez la quantité de livre souhaitée : ");

let resultat = (prix * 1.21) * quantite;

alert (`${quantite} livre(s) à ${prix} € vaut ${resultat} €`);

// Mon commentaire

