const chevron_gauche = document.querySelector('#précedent');
const chevron_droit = document.querySelector('#suivant');
const slide = ["brother.webp", "milky-way.webp", "montagne.webp", "montagne.webp", "oiseau.webp"];               
let numero = 0;

/**
 * 
 * @param {number} sens 
 */
function changedeslide(sens){
numero = numero + sens;
if (numero > 3)
    numero = 0;
if (numero < 0)
    numero = 3;
console.log(slide);

 document.querySelector('#slide').src = "./slide2/" + slide[numero];


}