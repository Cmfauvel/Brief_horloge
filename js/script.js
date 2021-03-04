// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des varaiables
 

// Calculer le degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré



// Déplacer les aiguilles en fonction de l'heure actuelle

function demarrerLaMontre() {
    let heureActuelle = new Date().toLocaleTimeString("fr");
    console.log(heureActuelle)
    let splitHeureActuelle = heureActuelle.split(':');
    console.log(splitHeureActuelle)

    let heure = parseInt(splitHeureActuelle[0]);
    let minute = parseInt(splitHeureActuelle[1]);
    let seconde = parseInt(splitHeureActuelle[2]);

    console.log(heure);
    console.log(minute);
    console.log(seconde);

    let mouvDegreHeure = 360 / 12;
    let mouvDegreMin = 360 / 60;
    let mouvDegreSec = 360 / 60;
    
    let placementAiguilleHeure = heure * mouvDegreHeure + 360 / (12 * minute);
    let placementAiguilleMinute = minute * mouvDegreMin + seconde * 6 / 60;
    let placementAiguilleSeconde = seconde * mouvDegreSec;
    console.log(placementAiguilleHeure)
    console.log(placementAiguilleMinute)
    console.log(placementAiguilleSeconde)

    AIGUILLEHR.style.transform = `rotate(${placementAiguilleHeure}deg)`//"rotate("+placementAiguilleHeure+ deg")";
    AIGUILLEMIN.style.transform = `rotate(${placementAiguilleMinute}deg)`//"rotate("+placementAiguilleMinute+ deg")";
    AIGUILLESEC.style.transform = `rotate(${placementAiguilleSeconde}deg)`;
   
}
console.log(demarrerLaMontre);
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
