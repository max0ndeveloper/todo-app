const TodoList = (todos) => {

    return (
        <div>
            {
                todos.item.map((todo, id) => (
                    <li key={id}>
                        {todo}
                    </li>
                ))
            }
        </div>
    )
}

export default TodoList