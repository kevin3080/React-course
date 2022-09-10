import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      (valor) => {// el "valor" recibe su argumento del componente ShowIncrement.jsx
        console.log('soy el useCallback')
        setCounter((incemCounter) => incemCounter + valor)
      },
      [],
    )
    

  /*   const incrementFather = () => {
        setCounter(counter + 1)
    } */

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
