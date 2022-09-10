import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"


const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    }, */
    
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []; // si es nulo regresa un arreglo vacio
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) || [])
    }, [todos])
    

    const handleNewTodo = ( nuevoTodo ) => {
        console.log({nuevoTodo});
        const action = {
            type: '[TODO] Add Todo',
            payload: nuevoTodo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {

       /*  console.log({id}) */
        dispatch({
            type: '[TODO] remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        console.log({id})
        
         dispatch({
             type: '[TODO] Toggle Todo',
             payload: id
         }) 
     }

  return (
    <>
        <h1>Todo App {todos.length}, <small>pendientes: 3</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    valor={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={(id) => handleToggleTodo(id)} 
                />
            </div>
            <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />

            <TodoAdd onNewTodo={handleNewTodo}/>
       
        </div>
        </div>

       



    </>
  )
}
