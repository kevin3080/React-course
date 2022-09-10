import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    
    test('gerHeroeById debe retornar un héroe por ID', ()=> {

        const id = 1;

        const hero = getHeroeById(id);
         console.log(hero);
        expect(hero).toEqual({"id": 1, "name": "Batman", "owner": "DC"})

        
    })
    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;

        // le pasamos 100 al id de la funcion
        // en esa posicion no tenemos un heroe
        const hero = getHeroeById(id);
         console.log(hero);
         
        // Diferentes formas de hacerlo:
        expect(hero).toBeFalsy();
        expect(false).toBeFalsy(); // Ojo que "false" pasa la funcion
        expect(hero).toBe(undefined);

    });

    //Tarea:
    // Debe retornar un arreglo con los héroes de DC
    test('getHeroesByOwner debe retornar heroes de DC', () => {


        const heroDc = 'DC';
    
        const hero = getHeroesByOwner(heroDc);
        console.log(hero);
    //length === 3
    
    expect(hero).toHaveLength(3);
    //otra manera:
    expect(hero.length).toBe(3);
    
    //toEqual al arreglo filtrado
    expect(hero).toEqual([{ id: 1, name: 'Batman', owner: 'DC' }, 
    { id: 3, name: 'Superman', owner: 'DC' }, 
    { id: 4, name: 'Flash', owner: 'DC' }]);
    
    // otra manera:
    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === heroDc ));

    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {

        //debe de retornar un arreglo con los heroes de Marvel
        const heroMarvel = 'Marvel';
        const hero = getHeroesByOwner(heroMarvel);
        console.log(hero);

        //length === 2
        expect(hero).toHaveLength(2);
        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === heroMarvel ));

    })






})