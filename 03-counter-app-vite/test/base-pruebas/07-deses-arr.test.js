import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => { 

    test('Debe de retornar un string y un numero', () => {

        const [letters, numbers] = retornaArreglo();
        
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        //otra forma de hacerlo:
        // de esta manera solo se evalua si se recibe cualquier tipo de string o numero
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) );
    });

 });