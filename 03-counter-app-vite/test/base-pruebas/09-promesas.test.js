import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un héroe', (done) =>{

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {


                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done(); // Con esto le digo a jest que espere a que termine la promesa para evaluar
            });


    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) =>{

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {


                expect(error).toBe( `No se pudo encontrar el héroe ${ id }`);

                done(); // Con esto le digo a jest que espere a que termine la promesa para evaluar
            });


    });

 });