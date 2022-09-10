


//Funciones en JS
//forma tradicional:
function saludar(nombre){
    return `Hola ${ nombre }`;
};

//forma recomendada:
const saludar2 = function saludar2(nombre2){
    return `hola yo soy ${nombre2}`
};
//funciones de flecha o funciones blandas:

const saludar3 = () => {
return `Hola Mundo!!`;
};

//funciones de flecha abreviada: si solo devuelve un return;
   
const saludar4 = (nombre4) => `Hola ${nombre4}`;
//console.log( saludar('Goku') )


console.log(saludar('kevin'));
console.log(saludar2('yohely'));
console.log(saludar3());
console.log(saludar4('arichan'));


//const getUser = () => {
//    return {
//        uid: 'ABCDEFG',
//        username: 'El_Capo1204'
//    }
//}
// Es igual a:
const getUser = () => ({
    uid: 'ABCDEFG',
    username: 'El_Capo1204'
})

console.log( getUser() )


//tarea:

const getUsuarioActivo = (nombre5) =>
    ({
        uid: 'ABC567',
        username: 'TomasCar'
    })


const usuarioActivo = getUsuarioActivo('Carlos');
console.log(usuarioActivo);