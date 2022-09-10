import { useState } from 'react'; // hooks
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {

    // const handleAdd = (event, newValue) => {
    //    // console.log(event)
    //    console.log(newValue);
    // };

    // Esto es un hook:
    const [ counter, setCounter ] = useState( value )
    // cada vez que se actualiza el estado se vuelve a lanzar el componente
    const handleAdd = () => {
        // console.log('1')

        //Llamamos al hook para cambiar el valor del estado
        // setCounter(counter + 1);
        //otra manera:
        setCounter( (c) => c + 1 );
        
     };

     const decrementar = () => setCounter( counter - 1 );
    

     const reset = () => setCounter ( (resetear) => value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={handleAdd}> +1 </button>
        <button onClick={decrementar}> -1 </button>
        <button aria-label='btn-reset' onClick={reset}> Reset </button>
    
    </>
  )
};
// <button onClick={ (event)=> handleAdd(event, 'hola') }>
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
  }
  //dato curioso: Primero se ejecuto los PropsApp.defaultProps antes de los PropsApp.propTypes
  CounterApp.defaultProps = {
    value: 'No hay numero'
  }
  



