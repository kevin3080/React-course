


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2 ] = personajes;
console.log(p2);




const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// tarea:
// el primer valor del arreglo se llamará nombre
// el segundo se llamará setnombre
const setState = (valor) => {
    return [valor, ()=>(console.log('Hola Mundo'))];
}

const [nombre, setNombre] =  setState('yohely')


console.log(nombre);
setNombre();

