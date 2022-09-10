
// Arreglos en JS
//const arreglo = new Array( 100 );


const arreglo = [1,2,3,4];
//arreglo.push(1); 

//no es recomendable usar el push porque modifica el objeto proncipal

//aca le agregas un valor al array sin modificar el primer array
let arreglo2 = [...arreglo, 5];// ... operador spread
//arreglo2.push( 5 );


//aca solo modificas el arreglo 3
const arreglo3 = arreglo2.map( function(numero){//Callback
    return numero * 2;
} );

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
