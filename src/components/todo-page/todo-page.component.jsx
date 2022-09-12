import TodoList from "../todo-list/todo-list.component";


const TodoPage = (item) => {
    return (
        <TodoList item={item.todo}/>

    )
}

export default TodoPage