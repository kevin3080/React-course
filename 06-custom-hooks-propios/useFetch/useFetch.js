import { useState } from "react";
import { useEffect } from "react";


export const useFetch = (url) => {
  



    const [state, setState] = useState({
        data: null, // va retornar la data de la peticion
        isLoading: true, // saber cuando estoy cargando
        hasError: null // manejamos si hay un error
    })



    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url)
        const data = await resp.json()

        
        setState({
            data: data, // es igual que dejarlo como: data,
            isLoading: false,
            hasError: null
        })

        console.log(data)
    }


    useEffect(() => {
      // el useEffect solo espera una funcion pura
      // El useEffect sirve para hacer una limpieza, no una promesa
        getFetch();
    }, [url])
    
  
    
  
    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
    };
}
