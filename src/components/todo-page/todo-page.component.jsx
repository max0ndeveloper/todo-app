import {useEffect, useState} from "react";
import {deleteDoc, doc, onSnapshot, orderBy, query} from "firebase/firestore";
import {db, todoRef} from "../../utils/firebase.utils";
import TodoList from "../todo-list/todo-list.component";


const TodoPage = () => {
    const [todos, setTodos] = useState([])
    const [, setLoader] = useState(true)

    const q = query(todoRef, orderBy('createdAt'))


    useEffect(() => {
        const unsub = onSnapshot(q, (querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push({id: doc.id, ...doc.data()})
            })
            setTodos(items)
            setLoader(false)
        })
        return () => unsub()
    }, [])


    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }



    return (
        <div className="todos">
            {todos.map((todo) => (
                <TodoList
                    key={todo.id}
                    todos={todo}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default TodoPage