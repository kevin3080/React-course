import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = ( iterationNumber = 100 ) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log('Ahí vamos...')
  }

  return `${ iterationNumber } iteraciones realizadas`
}




export const MemoHook = () => {

    const {counter, incremment } =  useCounter(1000)
    const [show, setShow] = useState(true)
    
    const momorizedValue = useMemo( () => heavyStuff(counter), [counter] )
      // useMemo(() => first, [second])
  return (
    <>
        <h1>counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ momorizedValue }</h4>


        <button
            className='btn btn-primary '
            onClick={ () => incremment(1) }
        >+1</button>

        <button
            className='btn btn-outline-primary'
            onClick={ () => setShow(!show)}// si estaba en true, se pone en false, o viseversa    
        >
          show/hide {JSON.stringify(show)}
        </button>
    </>
  )
}
