import { useEffect } from "react";
import { useForm } from "../hooks/useForm";



export const FromWithCustomHook = () => {

    const {formState, onImputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    /* const {username, email, password} = formState */

     


    useEffect(() => {
    /* console.log('useEffect called!!') */
    }, [])
    
    useEffect(() => {
    /* console.log('formState change!!') */
      }, [formState])
    
    useEffect(() => {/* 
     console.log('psw change!!')  */
    }, [ password])

   
   






  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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
        <input type="password" 
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={ onImputChange }
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    
       
    </>
  )
}
