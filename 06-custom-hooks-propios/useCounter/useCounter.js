import { useState } from "react"


export const useCounter = ( initialValue = 10 ) =>{

    const [counter, setCounter] = useState(initialValue)

    const incremment = (value) => {
        setCounter( counter + value )

    }

    const find = (value) => {
        setCounter(value)
    }

    const decrement = (value) => {
        if(counter === 0 ) return;

        setCounter( counter - value )
    }

    const reset = () => {
        setCounter( initialValue )
    }

    return{
        counter,
        incremment,
        decrement,
        reset,
        find,
    }

}