

export const TodoItems = ({items, onDeleteTodo, onToggleTodo}) => {
    console.log({items})
  return (
    <li  onDoubleClick={ () => onToggleTodo( items.id ) } className={`list-group-item d-flex justify-content-between`}>
        <span 
          className={`align-self-center ${(items.done) ? 'text-decoration-line-through' : '' }`}
         
          >
          {items.description}
          </span> 
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo(items.id) }
          >Borrar</button>
    </li>
  )
}
