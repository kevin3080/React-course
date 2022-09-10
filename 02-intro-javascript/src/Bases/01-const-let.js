// Variables y Constantes
// var se dejo de usar


const nombre = "kevina"; // una constante no va a cambiar
const apellido = "Pernia";

let valorDado = 5; // un let puede ser modificado
valorDado = 3;// asi cambias el valor de un let o variable

console.log( nombre, apellido, valorDado);

// var No se debe usar...
if( true ){// ese let valorDado solo va existir dentro del scope
    const nombre = 'Peter';
    let valorDado= 6;
    console.log(valorDado, nombre);
};

console.log(valorDado);