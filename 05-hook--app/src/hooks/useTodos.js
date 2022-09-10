import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/index"

/* const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    }, 
    
] */

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []; // si es nulo regresa un arreglo vacio
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

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


  return{
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(valor => !valor.done).length,
  }
}
