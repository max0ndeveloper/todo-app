import TodoList from "../todo-list/todo-list.component";


const TodoPage = (item, getToDo) => {
    return (
        <TodoList item={item.todo} getToDo={getToDo}/>
    )
}

export default TodoPage