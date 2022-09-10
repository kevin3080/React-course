//operador condicional tarnario:

const activo = true;

// let mensaje = '';

// if (!activo){ // si le coloco ! es la negacion de ese atributo
//     mensaje= 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }


// Es igual a:
// const mensaje = (!activo) ? 'Activo' : 'Inactivo';
//const mensaje = (!activo) ? 'Activo' : null;
//otra forma corta de hacer un if:
const mensaje = activo && 'Activo'
const mensaje1 = !activo && 'Activo'
console.log(mensaje);
console.log(mensaje1);