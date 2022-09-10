import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {

    const {counter, incremment } =  useCounter(10)
    console.log(incremment)
    const [show, setShow] = useState(true)
  return (
    <>
        <h1>counter: <Small value={ counter }/> </h1>
        <hr />

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
