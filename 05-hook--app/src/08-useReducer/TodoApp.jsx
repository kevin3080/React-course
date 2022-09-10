import { TodoList, TodoAdd, useTodos } from "./index"


export const TodoApp = () => {
    
    const {handleNewTodo, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, todos} = useTodos()
  

  return (
    <>
        <h1>Todo App {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
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
