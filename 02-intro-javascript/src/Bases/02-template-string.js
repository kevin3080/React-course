const nombre = "Kevin";
const apellido = "Pernia";

// const nombeCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${1+5}
`;
// `` es sensible a espacios y a saltos de lineae
// ${Aqui hay codigo de JavaScript};
const nombreSinSeparar =`${nombre} ${apellido}`
console.log(nombreCompleto);
console.log(nombreSinSeparar);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}`)