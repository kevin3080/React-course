//Promesas

import { getHeroesById } from "./Bases/08-imp-exp";


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         // tarea
//         // importen el
//         const p1 = getHeroesById(2);
//         resolve(p1);
//        // reject('No se pudo encontrar el heroe')
//     }, 2000 )

// });

// promesa.then( (heroe) =>{
//     console.log('heroe', heroe)
// } )
// //Si la promesa no se cumple:
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            // tarea
            // importen el
            const p1 = getHeroesById(id);
            if (p1) {
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }     
        }, 2000 )
    
    });

}

getHeroesByIdAsync(1)
    .then(console.log)
    //.then(heroe => console.log('Heroe', heroe))
    //.catch(err => console.warn(err));
    .catch(console.warn)
