import {collection, updateDoc, getDocs} from 'firebase/firestore'
import {db} from "../../utils/firebase.utils";

const TodoList = (todos) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
            {
                todos.item.map((todo, id) => (
                    <li className="todo" key={id}>
                        {todo.ToDo}
                        <button>
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