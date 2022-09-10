import { useCounter, useFetch } from '../hooks'
import { Quote,LoadingQuote } from './';


export const MultipleCustomHooks = () => {
  
    const {counter, incremment, find} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
  /* const {author, quote } = false; // la desestructuracion, funciona con objetos que sean true o false, null daria un error */
    const { author, quote } = !!data && data[0]

  

    return (
    <>
        <h1>BreackingBad Quotes</h1>
        <hr />

        <form className="input-group mb-3" onSubmit={ event => {
            event.preventDefault();// evita cargar la pagina al enviar el formulario
            const idQuote = event.target.search.value // accedo al name='search' del formulario y lo almaceno en una variable
            console.log(idQuote) // compruebo que funcione
            find(idQuote) // creé otra funcion dentro del custom hook useCounter donde solo va actualizar el state con el numero que se imprima en el formulario
            
            
        }} >
            <input name='search' type="number" className="form-control" placeholder="Search ID" autoComplete='off'></input>
            <button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
        </form>

        {
            isLoading 
                ? <LoadingQuote/>
                : <Quote author={ author } quote={ quote }/>       
        }

        <button className='btn btn-primary'
         onClick={ () => incremment(1)}
         disabled={isLoading} // cuando isLoading este en true, el boton estará desactivado
         >Next quote</button>




    </>
    
  )
}
