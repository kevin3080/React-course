import React, { useState, useEffect } from 'react';
// Desestructuración 
// Asignación Desestructurante


//Creamos un onjeto literal:
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//Para facilitar el codigo hacemos esto:
// Extrae esto de este objeto

//const { nombre } = persona;

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

// console.log(nombre);


const oseContext = ({ edad, clave, rango = 'Capitan'}) => {
    //console.log(edad, clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng : {
            lat: 3435555,
            lng: -34.454222
        }
         
    }
   
}

//retornaPersona(persona)

//si te intereza extrar latlng como objeto
//const {nombreClave, anios, latlng} = oseContext(persona);
//console.log(latlng);



//extraer objetos anidados y asignarlos a constantes

const {nombreClave, anios, latlng:{ lat,lng }} = oseContext(persona);

console.log( nombreClave, anios );
console.log( lat ,lng );
