//import { heroes } from "./data/heroes"; en el otro archivo va: export const heroes
// importacion por defecto:
// import heroes from "./data/heroes"; en el otro archivo al final va: export default heroes;
// para importar un archivo por defecto mas uno individual, lo desestructuramos;
//import heroes, {owners} from "./data/heroes";

//Para importar dos individuales los desestrucuramos:
//import { heroes, owners } from "./data/heroes";
// y en el otro archivo colocamos: 
// export{
//     heroes, 
//     owners
// }

//Para colocar uno por defecto podemos hacer:
import heroes, {owners} from "../data/heroes";
// // export{
//     heroes as default, 
//     owners
// }

//console.log(owners);





// const getHeroesById = (id) => {
//     return heroes.find((cualquierCosa) => {
//         if (cualquierCosa.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

// const getHeroesById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id );

// }

export const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id );
     
// diferentes maneras de hacer lo mismo

//console.log(getHeroesById(2));


export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log(getHeroesByOwner('DC'));