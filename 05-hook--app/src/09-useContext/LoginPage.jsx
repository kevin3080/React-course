import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  /* const algo = useContext(UserContext); */
  const { user, setUser } = useContext(UserContext);


    const cambio = (event) => {
      const { name, value } =  event.target
      setUser({
        ...user,
        [name] : value
      })

    }

    const enviar = (event) => {
      event.preventDefault()
 
      return console.log(user)
    }

    return( 
    <>
      <h1>LoginPage</h1>
      <hr />
  

      <form onSubmit={enviar}>
        <input type="text" placeholder="ingrese su numbre" name="nombre" onChange={cambio}/>
        <input type="email" placeholder="ingrese su email" name="email" onChange={cambio}/>
        <button type="submit"
        className="btn btn-primary"
      >Establecer usuario</button>
      </form>

      
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

     
    </>
    )
  }
  