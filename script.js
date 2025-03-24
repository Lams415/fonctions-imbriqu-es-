// Les variables suivantes sont globales
var num1 = 20,
  num2 = 3,
  nom = "Licorne";

// Cette fonction est définie dans la portée globale
function multiplier() {
  return num1 * num2;
}
multiplier() 

console.log( num1 * num2); // Renvoie 60
console.log(multiplier()); // Renvoie 60



// Un exemple de fonction imbriquée

function getScore() {
  var num1 = 2,
    num2 = 3;

  function ajoute() {
    return nom + " a marqué " + (num1 + num2);
  }

  return ajoute();
}

getScore(); // Renvoie "Licorne a marqué 5"
console.log(getScore());