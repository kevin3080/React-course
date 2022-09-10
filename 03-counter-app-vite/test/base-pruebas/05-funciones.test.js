import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () =>{

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        //console.log(getUser());
        
        expect( testUser ).toEqual( getUser() );
        
    });

    test('getUsuarioActivo debe de retornar un objeto', () =>{
        const name = 'Kevin';
        const user = getUsuarioActivo(name);
        
        const testGetUsuario = {
                uid: 'ABC567',
                username: name,
    
            }

            expect( testGetUsuario ).toEqual({
                uid: 'ABC567',
                username: name,
            });
    });
 });