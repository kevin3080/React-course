import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

    const { description, onImputChange, onResetForm } = useForm({
        description: ''
    })

    const onImputForm = (event) => {
        event.preventDefault();

        if ( description.length <= 0) return; // si el imput esta vacio, no postear nada

        // caso contrario:
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description, // description: description
        }

        onNewTodo && onNewTodo(newTodo) // si la funcion existe, llamamos onNewTodo, si No existe no llamamos nada
        onResetForm() // cuando le das al boton, esto hace que se borre la caja de texto
    }

  return (
    <form onSubmit={ onImputForm }>
                <input 
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onImputChange}

                 />
                
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1" 
                    name="description"
                    value={description}
                    onChange={onImputChange}
                        
                >
                    Agregar
                </button>
            </form>
  )
}
