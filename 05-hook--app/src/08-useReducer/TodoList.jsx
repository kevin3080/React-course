import { TodoItems } from "./TodoItems"

export const TodoList = ({valor = [], onDeleteTodo, onToggleTodo }) => {


    /* console.log({valor}) */
  return (
    <ul className="list-group">
        {
            valor.map( todo => (
                <TodoItems 
                  key={todo.id} 
                  items={todo} 
                  onDeleteTodo={ onDeleteTodo }
                  onToggleTodo={ onToggleTodo }
                /> // de prop le pasas la variable de la funcion
            ))
        }       
    </ul>
  )
}
