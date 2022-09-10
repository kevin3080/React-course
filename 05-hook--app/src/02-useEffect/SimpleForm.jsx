import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'mou',
        email: 'mousimpson@google.com'
    })


    const {username, email} = formState;

    const onImputChange = ({target}) => {
        const {name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
           
        })
    }


    useEffect(() => {
    /* console.log('useEffect called!!') */
    }, [])
    
    useEffect(() => {
    /* console.log('formState change!!') */
      }, [formState])
    
    useEffect(() => {
    /* console.log('email change!!') */
    }, [ email ])

   
   






  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onImputChange}
        />
        <input type="email" 
            className="form-control mt-2"
            placeholder="example@example.com"
            name="email"
            value={email}
            onChange={onImputChange}
        />



        {
            (username === 'mou2') && <Message/>
        }
    </>
  )
}
