

describe('Pruebas en <DemoComponent />', () => { 
  
    test('Esta prueba no debe de fallar', ()=>{
    
        // if ( 0 === 1 ){
        //     throw new Error('No puede dividir entre cero');
        // }
    
        //1. inicialización
        const message1 = 'Hola Mundo';
        
        
        
        // 2. estímulo
        const message2 = message1.trim();
        // .trim() es para quitar los espacios en blanco al unicio y al final
    
    
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 ); 
        // con expect en jest compara un onjeto con otro
        // con .toBe() queremos decir que es igual a
        
    })

 })