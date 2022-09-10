//Objetos Literales:


const persona = {
    //pares de valores:
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5556743,
        lat: 14.5544,
        lng: 56.6765433
    }

};

console.log(persona);
//creamos un nuevo objeto: con propiedad persona:
console.log({persona:persona});
//desde el EM6 es igual a:
console.log({persona});


const persona2 = persona; //esto no se hace porque haces una copia de la referencia
//duplpicas el valor en memoria
persona2.nombre = 'Peter';
console.log(persona2);


//la forma correcta en EM7 es:

const persona3 = { ...persona } // de esta manera vas a tener un clon del objeto
persona3.nombre = 'Tomas';

console.log (persona3);