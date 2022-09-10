import { getImagen } from "../../src/base-pruebas/11-async-await"

// para configurar el fetch en versiones menores al 18 de node colocar en consola: yarn add -D whatwg-fetch

describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe de retornar un URL de la imagen', async() =>{

        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    })



 })