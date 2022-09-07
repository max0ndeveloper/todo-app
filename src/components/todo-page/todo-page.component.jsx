import TodoList from "../todo-list/todo-list.component";


const TodoPage = (item) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <TodoList item={item.todo}/>
            </ul>
        </div>
    )
}

export default TodoPage