import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    

    



    const onClick = () => {
        /* document.querySelector('input').select(); */
        console.log(inputRef)
        inputRef.current.select();
    }
    const onClick1 = () => {
        /* document.querySelector('input').select(); */
        inputRef1.current.select();
    }
    const onClick2 = () => {
        /* document.querySelector('input').select(); */
        inputRef2.current.select();
    }



  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" 
        placeholder="Ingrese su nombre" 
        className='form-control'
        ref={ inputRef } />

        <button className='btn btn-primary mt-2' onClick={onClick}>
            Set Focus
        </button>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" 
        placeholder="Ingrese su nombre" 
        className='form-control'
        ref={ inputRef1 } />

        <button className='btn btn-primary mt-2' onClick={onClick1}>
            Set Focus
        </button>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" 
        placeholder="Ingrese su nombre" 
        className='form-control'
        ref={ inputRef2 } />

        <button className='btn btn-primary mt-2' onClick={onClick2}>
            Set Focus
        </button>
    </>
  )
}
