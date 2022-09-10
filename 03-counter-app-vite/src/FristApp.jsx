
//shorcout: rafc

//import { Fragment } from "react"

const sda = (a,b) =>  a*b;

const newMessage = [1,2,3,4,5,6,7,8,9];
const newMessage2 = {
    message: 'Hola Mundo',
    title: 'Pernia'
};
export const FristApp = () => {
  return (
    <>
        <h2>{newMessage}</h2>
        {/* <code>{JSON.stringify(newMessage2)}</code> */}
        <h1>Kevin</h1>
        <p>Soy un subtitulo</p>
        <h2>{sda(43,655)}</h2>
    </>
    
    
  )
}
// JSON.stringify(aca puedes mostrar codigo javascript)
//si no quieres importar el fragmento solo agregar <></>
