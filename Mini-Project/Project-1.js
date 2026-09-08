// # Mini-projet : Gestion des apprenants

// ## Ce que fait l'exemple fourni (exemple-menu.js)

// Le tableau `apprenants` commence **vide**. Le programme propose un menu qui
// permet de :

// - **1. Ajouter** un apprenant (prenom + note), qui devient un objet ajoute
//   au tableau
// - **2. Afficher** tous les apprenants enregistres
// - **3. Rechercher** un apprenant par son prenom
// - **4. Mettre a jour** la note d'un apprenant existant
// - **5. Supprimer** un apprenant par son prenom
// - **0. Quitter** le programme

// Lisez le code en entier, ligne par ligne, avant de commencer l'extension.
// Chaque fonction est commentee pour expliquer ce qu'elle fait et pourquoi.

// ## Comment lancer le programme

// ```bash
// node exemple-menu.js
// ```

// ## Ce que vous devez ajouter (dans un nouveau fichier mon-projet.js)

// Copiez d'abord le code de l'exemple dans un nouveau fichier, puis ajoutez :

// 1. **Empecher les doublons** : lors de l'ajout, verifiez si un apprenant
//    avec le meme prenom existe deja. Si oui, affichez un message et
//    n'ajoutez pas le nouvel apprenant.

// 2. **Calculer la moyenne generale** : ajoutez une option "6. Afficher la
//    moyenne de la classe" qui calcule et affiche la moyenne de toutes les
//    notes du tableau.

// 3. **Trouver le meilleur et le moins bon** : ajoutez une option "7.
//    Afficher le meilleur et le moins bon apprenant" (celui avec la note la
//    plus haute, et celui avec la note la plus basse).

// 4. **Validation des notes** : lors de l'ajout ou de la mise a jour d'une
//    note, verifiez qu'elle est bien comprise entre 0 et 20. Si ce n'est pas
//    le cas, affichez un message d'erreur et redemandez la valeur.

// 5. **Bonus difficile** : ajoutez une propriete `skills` (tableau de
//    chaines) a chaque apprenant lors de l'ajout, et une option pour afficher
//    les apprenants ayant une compÃ©tence precise (par exemple tous ceux qui
//    connaissent "JavaScript").

// ## Contraintes

// - Utilisez uniquement ce que vous avez appris : variables, conditions,
//   boucles, chaines de caracteres, tableaux, objets.
// - Le menu doit rester dans une boucle `while (true)` avec `break` pour
//   quitter, exactement comme dans l'exemple.
// - Testez chaque nouvelle option plusieurs fois avant de passer a la
//   suivante (ajoutez plusieurs apprenants, essayez de chercher un
//   apprenant qui n'existe pas, etc.)
const prompt = require("prompt-sync")();

console.log("Hello 👋");
const data = [{ Nom: "youssef", Prenom: "odada", Note: [12, 10, 14, 15, 17] }, { Nom: "bader", Prenom: "youcode", Note: [10, 20, 14, 15, 16] }];
const apprenant = { Nom: "", Prenom: "", Note: [] };

// Displaying The Table
function aficherLeMenu() {
    console.log(`*1-Ajouter un apprenant (prenom + note)
*2-Afficher tous les apprenants enregistres
*3-Rechercher un apprenant par son prenom
*4-la note d'un apprenant existant
*5-Supprimer un apprenant par son prenom
*0-Quitter le programme
`)
}

//Displaying The Table
aficherLeMenu();
//The User Entre A Number
const numberDesired = Number(prompt("Entrez le numéro de l'opération que vous souhaitez effectuer en fonction du menu: "));
//the function responde runinng the programme
function programme(number) {
    switch (number) {
        case 1:
            const nom = prompt("Entre votre nom: ");
            const prenom = prompt("Entre votre prenom: ")
            const note = Number(prompt("Entre votre notes: "))
            console.log(ajouteUnAppreant(prenom, nom, note));
            break;
        case 2:
            displayTheStudents(data);
            break;
        case 3:
            console.log(rechercherApprenantParPrenomOrNom(data, prompt("Souhaitez-vous effectuer une recherche par nom ou prenom? ").toLocaleLowerCase()));

            break;
        case 4:
            updateNotes(data, prompt("Enter le nome de etduiant que vois changer les note: "));

            break;
        case 5:
            console.log(removeEtudent(data, prompt("Entre le nom de etudien pur suprime: ")))

            break;
        case 0:
            break;
        default:
            number = Number(prompt("Entre un numero dans le menu: "));
            programme(number)
    }
}
programme(numberDesired);
//the functions 
function ajouteUnAppreant(prenom, nom, note) {
    const recherer = prompt("Souhaitez-vous effectuer une recherche par nom ou prenom? ").toLocaleLowerCase();
    if (recherer === "nom") {
        if (data.some(apprenant => apprenant.Nom === nom)) {
            console.log("Cette etudient deja exestie: ");
            const answer = prompt("Voulez-vous ajouter un nevaux note yes or no[Y/N]? ").toLocaleLowerCase();
            if (answer === "y") {
                const newNote = Number(prompt("Entre a novelle point: "));
                const target = data.find(apprenant => { return apprenant.Nom === nom });
                if (target) {
                    target.Note.push(newNote);
                }
                return target
            } else if (answer === "n") {
                const target = data.find(apprenant => { return apprenant.Nom === nom });
                return target
            }
        } else {
            apprenant.Nom = nom;
            apprenant.Prenom = prenom;
            apprenant.Note = note;
            data.push(apprenant);
            return `Nom: ${apprenant.Nom},
Prenom: ${apprenant.Prenom},
Note: ${apprenant.Note}`
        }
    } else if (recherer === "prenom") {
        if (data.some(apprenant => apprenant.Prenom === prenom)) {
            console.log("Cette etudient deja exestie: ");
            const answer = prompt("Voulez-vous ajouter un nevaux note yes or no[Y/N]? ").toLocaleLowerCase();
            if (answer === "y") {
                const newNote = Number(prompt("Entre a novelle point: "));
                const target = data.find(apprenant => { return apprenant.Prenom === prenom });
                if (target) {
                    target.Note.push(newNote);
                }
                return target
            } else if (answer === "n") {
                const target = data.find(apprenant => { return apprenant.Prenom === prenom });
                return target
            }
        } else {
            apprenant.Nom = nom;
            apprenant.Prenom = prenom;
            apprenant.Note = note;
            data.push(apprenant);
            return `Nom: ${apprenant.Nom},
Prenom: ${apprenant.Prenom},
Note: ${apprenant.Note}`
        }
    }

}
//
function displayTheStudents(array) {
    array.forEach((apprenant, i) => {
        console.log(`student number ${i + 1}:
        Name: ${apprenant.Nom}
        Prenom: ${apprenant.Prenom}
        Notes: ${apprenant.Note}`);
    });

}
function rechercherApprenantParPrenomOrNom(array, recherch) {
    if (recherch === 'nom') {
        const recherchNom = prompt("Entrez votre nom: ")
        const target = array.find(apprenant => { return apprenant.Nom === recherchNom });
        if (target) {
            return `Name: ${target.Nom}
Prenom: ${target.Prenom}
Notes: ${target.Note}`;
        } else {
            return "The student not found";
        }
    } else if (recherch === 'prenom') {
        const recherchPrenom = prompt("Entrez votre prenom: ")
        const target = array.find(apprenant => { return apprenant.Prenom === recherchPrenom });
        if (target) {
            return `Name: ${target.Nom}
Prenom: ${target.Prenom}
Notes: ${target.Note}`;
        } else {
            return "The student not found";
        }
    }
}
function updateNotes(array, recherch) {
    const target = array.find(apprenant => { return apprenant.Nom === recherch });
    if (target) {
        console.log(target.Note);
        let updatedNote = Number(prompt("choiser la note qu'tu es changer: "));
        let newNote = Number(prompt("Enter the nevaux Note: "))
        for (let i = 0; i < target.Note.length; i++) {
            if (updatedNote === target.Note[i]) {
                target.Note[i] = newNote;
            }

        }
        console.log(target.Note);
    } else {
        console.log("The name you enterd not found")
    }
}
function removeEtudent(array, recherch) {
    for (let etudien in array) {
        if (recherch !== etudien.Nom) {
            return "Le nom tu entre il ne pas existe"
        }
    }
    const updatedArray = array.filter(apprenant => { return apprenant.Nom !== recherch });
    return updatedArray
}

