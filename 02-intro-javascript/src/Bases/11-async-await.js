

// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve,reject) => {
//         resolve('http://asdkjlkasd.com')
//     })

//     return promesa;
// }

// getImagenPromesa().then(console.log);

//const getImagenPromesa = () => new Promise( (resolve) => resolve('http://asdkjlkasd.com'))
//getImagenPromesa().then(console.log);

//Usando el async
// cuando quieres tranformar una funcion y retorne su return por defecto en una promesa
// const getImagen = async() => {
//     return 'http://asdkjlkasd.com';
// }
// //console.log(getImage());
// getImagen().then(console.log)

const getImagen = async() => {

    try {
        const apiKey = '4MFPMseRgVUyRD3sReEHJYmjufblU7em';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
        // el await espera que esa promesa termine antes de seguir con la siguiente linea de codigo
           const {data} = await resp.json();
           const { url } = data.images.original;
           console.log(url);
           const img = document.createElement('img');
           img.src = url;
           document.body.append(img);
        // El async y el await se usan solo dentro de una funcion
    
        console.log(data);
    } catch (error) {
        // manejo del error
        console.error(error)
    }

}

getImagen();
