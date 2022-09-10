

const apiKey = '4MFPMseRgVUyRD3sReEHJYmjufblU7em';

const httpCode = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);

httpCode
    //Promesas en cadena:
    .then( resp => resp.json())
    .then(({data}) => {
        //optenemos la url de la api
        console.log(data.images.original.url);
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn); 