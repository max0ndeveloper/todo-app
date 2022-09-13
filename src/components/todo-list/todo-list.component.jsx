import {collection, deleteDoc, doc} from 'firebase/firestore'
import {db, todoRef} from "../../utils/firebase.utils";

const TodoList = (todos, getToDo) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {
                todos.item.map((item, id) => (
                    <li className="todo" key={id}>
                        {item.todo.ToDo}
                        <button onClick={async () => await deleteDoc(doc(db, 'todos', item.id))}>
                            remove
                        </button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default TodoList